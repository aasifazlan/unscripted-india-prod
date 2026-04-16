import { PrismaClient } from '@prisma/client'
import { Article } from '@/domain/entities/Article'
import {
  ArticleRepository,
  ArticleFilters,
  PaginationOptions,
  PaginatedResult,
} from '@/domain/repositories/ArticleRepository'

export class PrismaArticleRepository implements ArticleRepository {
  constructor(private readonly prisma: PrismaClient) {}

  private toDomain(record: any): Article {
    return {
      id: record.id,
      slug: record.slug,
      title: record.title,
      category: record.category,
      summary: record.summary ?? '',
      body: record.body,
      impactAnalysis: record.impactAnalysis ?? '',
      stateId: record.stateId ?? undefined,
      tags: record.tags,
      relatedArticleIds:
        record.relatedFrom?.map((r: any) => r.toId) ?? [],
      publishedAt: record.publishedAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    }
  }

  async create(data: Partial<Article>): Promise<Article> {
    const record = await this.prisma.article.create({
      data: {
        slug: data.slug!,
        title: data.title!,
        category: data.category!,
        summary: data.summary,
        body: data.body!,
        impactAnalysis: data.impactAnalysis,
        stateId: data.stateId,
        tags: data.tags ?? [],
        publishedAt: data.publishedAt ?? null,
      },
      include: { relatedFrom: true },
    })

    return this.toDomain(record)
  }

  // ✅ NEW
  async update(id: string, data: Partial<Article>): Promise<Article> {
    const record = await this.prisma.article.update({
      where: { id },
      data: {
        summary: data.summary,
        impactAnalysis: data.impactAnalysis,
        stateId: data.stateId,
        tags: data.tags,
        publishedAt: data.publishedAt,
      },
      include: { relatedFrom: true },
    })

    return this.toDomain(record)
  }

  async getById(id: string): Promise<Article | null> {
    const record = await this.prisma.article.findUnique({
      where: { id },
      include: { relatedFrom: true },
    })

    return record ? this.toDomain(record) : null
  }

  async getBySlug(slug: string): Promise<Article | null> {
    const record = await this.prisma.article.findUnique({
      where: { slug },
      include: { relatedFrom: true },
    })

    return record ? this.toDomain(record) : null
  }

  async getByIds(ids: string[]): Promise<Article[]> {
    const records = await this.prisma.article.findMany({
      where: { id: { in: ids } },
      include: { relatedFrom: true },
    })

    return records.map(this.toDomain.bind(this))
  }

  async list(
    filters: ArticleFilters,
    { page, limit }: PaginationOptions
  ): Promise<PaginatedResult<Article>> {
    const where: any = {}

    if (filters.category) where.category = filters.category
    if (filters.stateId) where.stateId = filters.stateId

    if (filters.published !== undefined) {
      where.publishedAt = filters.published ? { not: null } : null
    }

    if (filters.tags?.length) {
      where.tags = { hasSome: filters.tags }
    }

    const [records, total] = await Promise.all([
      this.prisma.article.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { publishedAt: 'desc' },
        include: { relatedFrom: true },
      }),
      this.prisma.article.count({ where }),
    ])

    return {
      data: records.map(this.toDomain.bind(this)),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    }
  }

  async searchByText(query: string): Promise<Article[]> {
    const records = await this.prisma.article.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { summary: { contains: query, mode: 'insensitive' } },
          { body: { contains: query, mode: 'insensitive' } },
          { tags: { has: query } },
        ],
      },
      take: 10,
      orderBy: { publishedAt: 'desc' },
      include: { relatedFrom: true },
    })

    return records.map(this.toDomain.bind(this))
  }

  async findRelated(articleId: string, limit: number): Promise<Article[]> {
    const current = await this.prisma.article.findUnique({
      where: { id: articleId },
    })

    if (!current) return []

    const records = await this.prisma.article.findMany({
      where: {
        NOT: { id: articleId },
        OR: [
          { category: current.category },
          current.tags?.length
            ? { tags: { hasSome: current.tags } }
            : undefined,
        ].filter(Boolean) as any,
      },
      take: limit,
      orderBy: { publishedAt: 'desc' },
      include: { relatedFrom: true },
    })

    return records.map(this.toDomain.bind(this))
  }
}