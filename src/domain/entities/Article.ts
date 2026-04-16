export type ArticleCategory =
  | 'LAW'
  | 'AMENDMENT'
  | 'POLICY'
  | 'CULTURE'
  | 'HISTORY'
  | 'DIVERSITY'
  | 'STATE_INSIGHT'

export interface Article {
  id: string
  slug: string
  title: string
  category: ArticleCategory
  summary: string
  body: string
  impactAnalysis: string
  stateId?: string
  tags: string[]
  relatedArticleIds: string[]
  embedding?: number[]
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date
  
}

export interface CreateArticleDTO {
  title: string
  category: ArticleCategory
  body: string
  stateId?: string
  tags: string[]
  embedding?: number[]
}

export interface UpdateArticleDTO extends Partial<CreateArticleDTO> {
  summary?: string
  impactAnalysis?: string
  publishedAt?: Date | null
}
