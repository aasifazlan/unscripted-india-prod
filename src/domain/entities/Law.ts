export interface Law {
  id: string
  name: string
  actNumber: string
  year: number
  summary: string
  fullText?: string
  articleId: string
  amendments: Amendment[]
}

export interface Amendment {
  id: string
  lawId: string
  year: number
  description: string
  effect: string
}

export interface CreateLawDTO {
  name: string
  actNumber: string
  year: number
  summary: string
  fullText?: string
  articleId: string
}
