import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { key: string } }
) {
  const indexNowKey = process.env.INDEXNOW_KEY;

  if (!indexNowKey) {
    return new NextResponse('Key not found in environment', { status: 404 });
  }

  // Support both /yourkey.txt and /indexnow.txt?key=yourkey
  const key = params.key;

  if (key !== indexNowKey) {
    return new NextResponse('Key mismatch', { status: 404 });
  }

  return new NextResponse(indexNowKey, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
