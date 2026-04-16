// import { prisma } from '../src/infrastructure/db/prisma/client'
import { prisma } from '@/infrastructure/db/prisma/client'
// import { PineconeSearchRepository } from '../src/infrastructure/repositories/PineconeSearchRepository'
import { PineconeSearchRepository } from '@/infrastructure/repositories/PineconeSearchRepository'
// import { GroqAIService } from '../src/infrastructure/services/GroqAIService' // 👈 adjust if needed
import { GroqAIService } from '@/infrastructure/ai/GroqAIService'

const searchRepo = new PineconeSearchRepository()
const aiService = new GroqAIService()

async function run() {
  const articles = await prisma.article.findMany()

  console.log(`🚀 Found ${articles.length} articles`)

  for (const article of articles) {
    const text = `${article.title} ${article.summary ?? ''} ${article.body}`

    try {
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

  console.log('🎉 Done')
}

run()