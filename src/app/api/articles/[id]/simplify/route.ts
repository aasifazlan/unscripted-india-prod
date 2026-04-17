import { NextRequest, NextResponse } from 'next/server'
import { simplifyArticle } from '@/infrastructure/container'

export async function POST(
  _req: NextRequest,
  context: any // ✅ IMPORTANT: no strict typing here
) {
  try {
    const id = context.params?.id

    if (!id) {
      return NextResponse.json(
        { error: 'Missing article id' },
        { status: 400 }
      )
    }

    console.log('🔥 Simplify:', id)

    const simplified = await simplifyArticle.execute(id)

    return NextResponse.json({ simplified })
  } catch (err: any) {
    console.error('❌ ERROR:', err.message)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}