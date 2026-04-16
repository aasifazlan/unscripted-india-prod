import { NextRequest, NextResponse } from 'next/server'
import { listArticles, createArticle } from '@/infrastructure/container'
import { CreateArticleDTO } from '@/domain/entities/Article'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page     = Math.max(1, parseInt(searchParams.get('page')  ?? '1'))
    const limit    = Math.min(50, parseInt(searchParams.get('limit') ?? '12'))
    const category = searchParams.get('category') ?? undefined
    const stateId  = searchParams.get('stateId')  ?? undefined
    const tags     = searchParams.get('tags')?.split(',').filter(Boolean)

    const result = await listArticles.execute(
      { category: category as any, stateId, tags, published: true },
      { page, limit },
    )
    return NextResponse.json(result)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body: CreateArticleDTO = await req.json()
    if (!body.title || !body.category || !body.body) {
      return NextResponse.json({ error: 'title, category, and body are required' }, { status: 400 })
    }

    const article = await createArticle.execute(body)
    return NextResponse.json(article, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
