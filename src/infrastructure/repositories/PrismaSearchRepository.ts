// /infrastructure/repositories/PrismaSearchRepository.ts

import { SearchRepository, SearchResult } from '@/domain/repositories/SearchRepository'

export class PrismaSearchRepository implements SearchRepository {
  async semanticSearchByVector(): Promise<SearchResult[]> {
    return [] // Prisma cannot do vector search
  }

  async indexArticle(): Promise<void> {
    // no-op
  }

  async deleteFromIndex(): Promise<void> {
    // no-op
  }

  async getIndexStats(): Promise<any> {
    return { message: 'Prisma search does not support index stats' }
  }
}