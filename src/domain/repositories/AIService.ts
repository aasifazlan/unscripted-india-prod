// src/domain/repositories/AIService.ts

export interface AIService {
  summarize(text: string): Promise<string>
  simplify(text: string): Promise<string>
  analyzeImpact(text: string): Promise<string>
  generateEmbedding(text: string): Promise<number[]>
}