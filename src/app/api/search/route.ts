import { NextRequest, NextResponse } from 'next/server'
import { searchContent } from '@/infrastructure/container'

export async function GET(req: NextRequest) {
  try {
    const query = new URL(req.url).searchParams.get('q')

    if (!query || query.trim().length < 2) {
      return NextResponse.json([])
    }

    const results = await searchContent.execute(query.trim())

    return NextResponse.json(results ?? [])
  } catch (err: any) {
    console.error('❌ SEARCH API ERROR:', err)

    return NextResponse.json(
      {
        error: 'Search failed',
        message: err?.message ?? 'Unknown error',
      },
      { status: 500 },
    )
  }
}