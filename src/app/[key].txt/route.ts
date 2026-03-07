import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { key: string } }
) {
  const indexNowKey = process.env.INDEXNOW_KEY;

  if (!indexNowKey || params.key !== indexNowKey) {
    return new NextResponse('Key not found', { status: 404 });
  }

  return new NextResponse(indexNowKey, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
