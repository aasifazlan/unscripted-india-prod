import Anthropic from '@anthropic-ai/sdk'
import { AIService } from '@/domain/repositories/AIService'

export class  GroqAIService implements AIService {
  private client: Anthropic
  private readonly model = 'claude-sonnet-4-6'

  constructor() {
    this.client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }

  private async complete(systemPrompt: string, userContent: string): Promise<string> {
    const response = await this.client.messages.create({
      model: this.model,
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: 'user', content: userContent }],
    })
    const block = response.content[0]
    if (block.type !== 'text') throw new Error('Unexpected AI response type')
    return block.text
  }

  async summarize(text: string): Promise<string> {
    return this.complete(
      'You are an expert at explaining Indian laws and policies. ' +
        'Write a concise, neutral 2–3 sentence summary for a general audience. ' +
        'Return only the summary text, no preamble.',
      text,
    )
  }

  async simplify(text: string): Promise<string> {
    return this.complete(
      'Explain the following Indian law or policy in plain language as if talking to a curious 18-year-old. ' +
        'Avoid jargon. Use bullet points where helpful. Keep it under 200 words. ' +
        'Return only the explanation, no preamble.',
      text,
    )
  }

  async analyzeImpact(text: string): Promise<string> {
    return this.complete(
      'Analyze the socio-economic and civic impact of the following Indian law or policy. ' +
        'Be neutral, factual, and structured. Mention affected groups and long-term implications. ' +
        'Keep it under 150 words. Return only the analysis, no preamble.',
      text,
    )
  }

  async generateEmbedding(text: string): Promise<number[]> {
    // Anthropic does not expose an embeddings endpoint.
    // We use OpenAI's text-embedding-3-small as the embedding provider.
    // To swap providers, implement a different AIService or extend this class.
    const { OpenAI } = await import('openai')
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text.slice(0, 8000),
    })
    return response.data[0].embedding
  }
}
