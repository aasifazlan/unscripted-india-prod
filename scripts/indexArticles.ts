// /scripts/indexArticles.ts

import { prisma } from '@/infrastructure/db/prisma/client'
import { PineconeSearchRepository } from '@/infrastructure/repositories/PineconeSearchRepository'
import { GroqAIService } from '@/infrastructure/ai/GroqAIService'

const searchRepo = new PineconeSearchRepository()

// ⚠️ Replace this with your actual implementation
const aiService = new GroqAIService()

async function indexAllArticles() {
  const articles = await prisma.article.findMany()

  console.log(`🚀 Found ${articles.length} articles`)

  for (const article of articles) {
    try {
      const text = `${article.title} ${article.summary ?? ''} ${article.body}`

      const embedding = await aiService.generateEmbedding(text)

      await searchRepo.indexArticle(
        article.id,
        text,
        embedding
      )

      console.log(`✅ Indexed: ${article.title}`)
    } catch (err) {
      console.error(`❌ Failed: ${article.id}`, err)
    }
  }

  console.log('🎉 Done indexing')
}

indexAllArticles()