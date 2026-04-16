import { Article, CreateArticleDTO } from '@/domain/entities/Article'
import { ArticleRepository } from '@/domain/repositories/ArticleRepository'
import { AIService } from '@/domain/repositories/AIService'
import { SearchRepository } from '@/domain/repositories/SearchRepository'

export class CreateArticleUseCase {
  constructor(
    private readonly articleRepo: ArticleRepository,
    private readonly aiService: AIService,
    private readonly searchRepo: SearchRepository,
  ) {}

  async execute(dto: CreateArticleDTO): Promise<Article> {
    // 1. Prepare consistent text for AI
    const contentForAI = `${dto.title} ${dto.body} ${(dto.tags ?? []).join(' ')}`

    // 2. Run AI pipeline
    const [summary, impactAnalysis, embedding] = await Promise.all([
      this.aiService.summarize(dto.body),
      this.aiService.analyzeImpact(dto.body),
      this.aiService.generateEmbedding(contentForAI),
    ])

    console.log('🧠 embedding sample:', embedding.slice(0, 10))

    // 3. Save article first
    const article = await this.articleRepo.create(dto)

    // 4. Update enriched fields
    // Bug 4 fixed: embedding is now persisted in the DB so re-indexing
    // doesn't require re-calling the AI service.
    const enriched = await this.articleRepo.update(article.id, {
      summary,
      impactAnalysis,
      embedding,
    })

    // 5. Index AFTER DB success (critical)
    try {
      await this.searchRepo.indexArticle(
        enriched.id,
        contentForAI,
        embedding,
      )
    } catch (err) {
      console.error('❌ Indexing failed:', err)
      // don't break article creation
    }

    return enriched
  }
}