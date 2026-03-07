import { NextResponse } from 'next/server';

export async function GET() {
  const indexNowKey = process.env.INDEXNOW_KEY;

  if (!indexNowKey) {
    return new NextResponse('Key not found', { status: 404 });
  }

  return new NextResponse(indexNowKey, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
