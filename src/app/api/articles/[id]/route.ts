import { NextRequest, NextResponse } from 'next/server'
import { getArticle } from '@/infrastructure/container'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params

    console.log("🔥 GET article:", id)

    const article = await getArticle.executeById(id)

    return NextResponse.json(article)
  } catch (err: any) {
    console.log("❌ ERROR:", err.message)

    return NextResponse.json({ error: err.message }, { status: 404 })
  }
}