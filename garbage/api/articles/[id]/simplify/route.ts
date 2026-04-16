import { NextRequest, NextResponse } from 'next/server'
import { simplifyArticle } from '../../../../../src/infrastructure/container'

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const simplified = await simplifyArticle.execute(params.id)
    return NextResponse.json({ simplified })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 404 })
  }
}
