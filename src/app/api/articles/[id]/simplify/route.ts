import { NextRequest, NextResponse } from 'next/server'
import { simplifyArticle } from '@/infrastructure/container'

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } } // ✅ FIXED
) {
  try {
    const { id } = params

    console.log('🔥 Simplify:', id)

    const simplified = await simplifyArticle.execute(id)

    return NextResponse.json({ simplified })
  } catch (err: any) {
    console.error('❌ ERROR:', err.message)

    return NextResponse.json(
      { error: err.message },
      { status: 404 }
    )
  }
}