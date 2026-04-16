import { Article } from '@/domain/entities/Article'
import { ArticleRepository } from '@/domain/repositories/ArticleRepository'

export class GetArticleUseCase {
  constructor(private readonly articleRepo: ArticleRepository) {}

  // Bug 5 fixed: log message now correctly identifies this as a by-id lookup
  async executeById(id: string): Promise<Article | null> {
    console.log(`GET /api/articles/${id} hit`)
    return this.articleRepo.getById(id)
  }

  async executeBySlug(slug: string): Promise<Article | null> {
    return this.articleRepo.getBySlug(slug)
  }
}