// /infrastructure/repositories/PineconeSearchRepository.ts

import { Pinecone } from '@pinecone-database/pinecone'
import { SearchRepository, SearchResult } from '@/domain/repositories/SearchRepository'

export class PineconeSearchRepository implements SearchRepository {
  private client: Pinecone
  private indexName: string

  constructor() {
    this.client = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
    })

    this.indexName = process.env.PINECONE_INDEX ?? 'unscripted-india'
  }

  private get index() {
    return this.client.index(this.indexName)
  }

  async semanticSearchByVector(
    vector: number[],
    topK = 10,
  ): Promise<SearchResult[]> {
    try {
      if (!vector?.length) return []

      console.log('📡 Query vector dim:', vector.length)

      const res = await this.index.query({
        vector,
        topK,
        includeMetadata: true,
      })

      console.log('📥 Matches:', res.matches?.length ?? 0)

      return (res.matches ?? []).map((m) => ({
        articleId: m.id,
        score: m.score ?? 0,
        snippet: (m.metadata?.snippet as string) ?? '',
      }))
    } catch (err) {
      console.error('❌ Pinecone query failed:', err)
      return []
    }
  }

  async indexArticle(
    articleId: string,
    content: string,
    embedding: number[],
  ): Promise<void> {
    try {
      const snippet = content.slice(0, 300)

      await this.index.upsert([
        {
          id: articleId,
          values: embedding,
          metadata: { snippet },
        },
      ])

      console.log('✅ Indexed:', articleId)
    } catch (err) {
      console.error('❌ Index failed:', err)
    }
  }

  async deleteFromIndex(articleId: string): Promise<void> {
    await this.index.deleteOne(articleId)
  }

  async getIndexStats(): Promise<any> {
    return await this.index.describeIndexStats()
  }
}