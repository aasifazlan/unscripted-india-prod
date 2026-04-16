import { NextRequest, NextResponse } from 'next/server'
import { simplifyArticle } from '@/infrastructure/container'

export async function POST(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params

    console.log("🔥 Simplify:", id)

    const simplified = await simplifyArticle.execute(id)

    return NextResponse.json({ simplified })
  } catch (err: any) {
    console.log("❌ ERROR:", err.message)

    return NextResponse.json({ error: err.message }, { status: 404 })
  }
}