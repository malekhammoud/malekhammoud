import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  props: { params: Promise<{ key: string }> }
) {
  const params = await props.params;
  const indexNowKey = process.env.INDEXNOW_KEY;

  if (!indexNowKey) {
    console.error('INDEXNOW_KEY not found in environment');
    return new NextResponse('Key not found in environment', { status: 404 });
  }

  // Next.js dynamic segment [key] matches the whole segment including dots.
  // Example: if URL is /0e97540f6bb74bbb85fe1ea312739ed1.txt, params.key will be '0e97540f6bb74bbb85fe1ea312739ed1.txt'.
  const { key } = params;
  
  // Also support the indexnow.txt?key=... method
  const { searchParams } = new URL(request.url);
  const queryKey = searchParams.get('key');

  const isMatchingFile = key === `${indexNowKey}.txt` || key === indexNowKey;
  const isMatchingQuery = (key === 'indexnow.txt' || key === 'indexnow') && queryKey === indexNowKey;

  if (isMatchingFile || isMatchingQuery) {
    return new NextResponse(indexNowKey, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }

  // If the request looks like an IndexNow request but doesn't match the key, 
  // return a simple text 404 to avoid triggering the full HTML 404 page for API calls.
  if (key.endsWith('.txt') || key === 'indexnow') {
    return new NextResponse('Key mismatch', { status: 404 });
  }

  // For everything else, trigger the standard site-wide 404 page.
  // Static routes like /about or /articles take precedence and won't reach here.
  return notFound();
}
