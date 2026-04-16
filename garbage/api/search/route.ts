import { NextRequest, NextResponse } from 'next/server'
import { searchContent } from '../../../src/infrastructure/container'

export async function GET(req: NextRequest) {
  try {
    const query = new URL(req.url).searchParams.get('q')
    if (!query || query.trim().length < 2) {
      return NextResponse.json({ error: 'Query must be at least 2 characters' }, { status: 400 })
    }
    const results = await searchContent.execute(query.trim())
    return NextResponse.json(results)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
