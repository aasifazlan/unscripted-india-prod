import {
  ArticleRepository,
  ArticleFilters,
  PaginationOptions,
  PaginatedResult,
} from '@/domain/repositories/ArticleRepository'
import { Article } from '@/domain/entities/Article'

export class ListArticlesUseCase {
  constructor(private readonly articleRepo: ArticleRepository) {}

  async execute(
    filters: ArticleFilters,
    pagination: PaginationOptions,
  ): Promise<PaginatedResult<Article>> {
    return this.articleRepo.list(filters, pagination)
  }
}