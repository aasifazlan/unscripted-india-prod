import { prisma } from '@/infrastructure/db/prisma/client'
import { PrismaArticleRepository } from '@/infrastructure/repositories/PrismaArticleRepository'
import { PineconeSearchRepository } from '@/infrastructure/repositories/PineconeSearchRepository'
import {  GroqAIService } from '@/infrastructure/ai/GroqAIService'

import { GetArticleUseCase } from '@/application/use-cases/article/GetArticleUseCase'
import { CreateArticleUseCase } from '@/application/use-cases/article/CreateArticleUseCase'
import { ListArticlesUseCase } from '@/application/use-cases/article/ListArticlesUseCase'
import { SimplifyArticleUseCase } from '@/application/use-cases/article/SimplifyArticleUseCase'
import { SearchContentUseCase } from '@/application/use-cases/search/SearchContentUseCase'

// ── Infrastructure ─────────────────────────────
const articleRepo = new PrismaArticleRepository(prisma)
const searchRepo = new PineconeSearchRepository()
const aiService = new  GroqAIService()

// ── Use Cases ─────────────────────────────
export const getArticle = new GetArticleUseCase(articleRepo)

export const createArticle = new CreateArticleUseCase(
  articleRepo,
  aiService,
  searchRepo,
)

export const listArticles = new ListArticlesUseCase(articleRepo)

export const simplifyArticle = new SimplifyArticleUseCase(
  articleRepo,
  aiService,
)

export const searchContent = new SearchContentUseCase(
  articleRepo,
  searchRepo,
  aiService,
)