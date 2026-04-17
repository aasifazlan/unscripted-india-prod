import { NextRequest, NextResponse } from 'next/server'
import { simplifyArticle } from '@/infrastructure/container'

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const raw = await simplifyArticle.execute(id)

    // normalize any leftover junk (safety net)
    const cleaned = raw
      .replace(/\*\*/g, '')       // remove **
      .replace(/^\*\s*/gm, '')    // remove * bullets
      .trim()

    return NextResponse.json({ simplified: cleaned })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 404 }
    )
  }
}