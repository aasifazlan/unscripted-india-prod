import { Article } from '@/domain/entities/Article'

export type ArticleFilters = {
  category?: string
  published?: boolean
}

export type PaginationOptions = {
  page: number
  limit: number
}

export type PaginatedResult<T> = {
  data: T[]
  total: number
  page: number
  totalPages: number
}

export interface ArticleRepository {
  list(
    filters: ArticleFilters,
    pagination: PaginationOptions
  ): Promise<PaginatedResult<Article>>

  getById(id: string): Promise<Article | null>
  getBySlug(slug: string): Promise<Article | null>
  getByIds(ids: string[]): Promise<Article[]>
  searchByText(query: string): Promise<Article[]>
  // ✅ ADD THIS
  findRelated(articleId: string, limit: number): Promise<Article[]>
}