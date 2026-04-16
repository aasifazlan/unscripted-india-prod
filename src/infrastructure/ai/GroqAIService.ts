// src/infrastructure/ai/GroqAIService.ts

import OpenAI from 'openai'
import { AIService } from '@/domain/repositories/AIService'

export class GroqAIService implements AIService {
  private groq: OpenAI
  private openrouter: OpenAI

  constructor() {
    // 🔥 Groq (Primary)
    this.groq = new OpenAI({
      apiKey: process.env.GROQ_API_KEY!,
      baseURL: 'https://api.groq.com/openai/v1',
    })

    // ⚡ OpenRouter (Fallback)
    this.openrouter = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY!,
      baseURL: 'https://openrouter.ai/api/v1',
    })
  }

  private async chat(system: string, user: string): Promise<string> {
    try {
      const res = await this.groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        max_tokens: 800,
      })

      return res.choices[0]?.message?.content?.trim() ?? ''
    } catch (err) {
      console.warn('Groq failed, switching to OpenRouter...')

      const res = await this.openrouter.chat.completions.create({
        model: 'meta-llama/llama-3-8b-instruct:free',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        max_tokens: 800,
      })

      return res.choices[0]?.message?.content?.trim() ?? ''
    }
  }

  async summarize(text: string): Promise<string> {
    return this.chat(
      'Summarize Indian law clearly in 2-3 lines.',
      text
    )
  }

  async simplify(text: string): Promise<string> {
    return this.chat(
      'Explain in simple bullet points for a student.',
      text
    )
  }

  async analyzeImpact(text: string): Promise<string> {
    return this.chat(
      'Analyze socio-economic impact in 120 words.',
      text
    )
  }

  // ✅ FIX: Required by interface
  async generateEmbedding(text: string): Promise<number[]> {
    // Temporary dummy implementation
    return Array(384).fill(0)

    // 👉 Later replace with:
    // - OpenAI
    // - HuggingFace
  }
}