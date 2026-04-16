import { ArticleRepository } from '@/domain/repositories/ArticleRepository'
import { AIService } from '@/domain/repositories/AIService'

export class SimplifyArticleUseCase {
  constructor(
    private readonly articleRepo: ArticleRepository,
    private readonly aiService: AIService,
  ) {}

  async execute(articleId: string): Promise<string> {
    const article = await this.articleRepo.getById(articleId)

    if (!article) {
      throw new Error(`Article not found: ${articleId}`)
    }

    return this.aiService.simplify(article.body)
  }
}