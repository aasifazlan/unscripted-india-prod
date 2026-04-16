// /application/use-cases/SearchContentUseCase.ts

import { Article } from '@/domain/entities/Article'
import { ArticleRepository } from '@/domain/repositories/ArticleRepository'
import { SearchRepository, SearchResult } from '@/domain/repositories/SearchRepository'
import { AIService } from '@/domain/repositories/AIService'

export interface SearchResultWithArticle {
  article: Article
  score: number
  snippet: string
}

export class SearchContentUseCase {
  constructor(
    private readonly articleRepo: ArticleRepository,
    private readonly searchRepo: SearchRepository,
    private readonly aiService: AIService,
  ) {}

  async execute(query: string): Promise<SearchResultWithArticle[]> {
    if (!query || query.trim().length < 2) return []

    const embedding = await this.aiService.generateEmbedding(query)

    console.log('🧠 embedding size:', embedding.length)

    // 🔥 stats
    if (this.searchRepo.getIndexStats) {
      const stats = await this.searchRepo.getIndexStats()
      console.log('📊 Pinecone stats:', stats)
    }

    const results: SearchResult[] =
      await this.searchRepo.semanticSearchByVector(embedding, 10)

    console.log('🔎 Pinecone results:', results.length)

    // 🔥 fallback
    if (!results.length) {
      console.log('⚠️ fallback to DB search')

      const fallback = await this.articleRepo.searchByText(query)

      return fallback.map((article) => ({
        article,
        score: 0,
        snippet: article.summary || article.body.slice(0, 150),
      }))
    }

    const articleIds = results.map((r) => r.articleId)
    const articles = await this.articleRepo.getByIds(articleIds)

    const map = new Map(articles.map((a) => [a.id, a]))

    return results
      .map((r) => {
        const article = map.get(r.articleId)
        if (!article) return null

        return {
          article,
          score: r.score,
          snippet: r.snippet || article.summary,
        }
      })
      .filter(Boolean) as SearchResultWithArticle[]
  }
}