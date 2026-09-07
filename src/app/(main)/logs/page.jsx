import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { getAllLogs } from '@/lib/logs'

export const metadata = {
  title: 'Logs',
  description:
    'Written notes by Malek Hammoud on local AI, robotics, and the systems underneath them.',
  alternates: { canonical: '/logs' },
}

export const dynamic = 'force-static'

function Thumb({ thumb, media, title }) {
  const item = thumb || (Array.isArray(media) ? media[0] : media)
  if (!item) return <span aria-hidden="true" />

  const videoItem =
    (item?.type === 'video' ? item : null) ||
    (Array.isArray(media) && media.find((m) => m?.type === 'video')) ||
    null

  const isVideo = Boolean(videoItem?.sources?.length)

  const poster =
    videoItem?.poster ||
    item?.poster ||
    (Array.isArray(media) ? media[0]?.poster : null)

  const src =
    item?.src ||
    poster ||
    (Array.isArray(media) ? media[0]?.src : null) ||
    '/images/projects/robot.webp'

  const isGif = typeof src === 'string' && src.endsWith('.gif')

  return (
    <div className="group/thumb relative aspect-[16/10] w-full overflow-hidden rounded border border-rule/80 bg-deep/90 shadow-sm transition-all duration-300 group-hover:border-accent/70 group-hover:shadow-md">
      {isVideo ? (
        <video
          className="h-full w-full object-cover object-center transition duration-500 group-hover/thumb:scale-105"
          poster={poster || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {videoItem.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ) : (
        <Image
          src={src}
          alt={item?.alt || title || 'Log preview'}
          fill
          sizes="(min-width: 640px) 224px, 100vw"
          unoptimized={isGif}
          className="h-full w-full object-cover object-center transition duration-500 group-hover/thumb:scale-105"
        />
      )}
    </div>
  )
}

export default function LogsCatalog() {
  const logs = getAllLogs()

  return (
    <Container>
      <header className="py-14 sm:py-20">
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-accent">
          Logs
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
          Notes on building, the hard parts.
        </h1>
        <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-mute">
          Technical deep-dives, hardware post-mortems, and system write-ups I
          wrote so the next person — usually me — doesn’t make the same mistakes.
        </p>
      </header>

      <ul className="divide-y divide-rule border-t border-rule pb-20">
        {logs.map((log) => (
          <li key={log.slug}>
            <Link
              href={`/logs/${log.slug}`}
              className="group grid gap-6 py-10 sm:grid-cols-[4.5rem_14rem_minmax(0,1fr)] sm:items-start sm:gap-8"
            >
              <div className="flex flex-wrap gap-x-3 font-mono text-xs text-mute sm:flex-col sm:gap-1 sm:pt-2">
                <time dateTime={log.date} className="text-accent font-medium">
                  {log.date}
                </time>
                <span className="uppercase text-2xs tracking-wider">{log.category}</span>
              </div>
              <div className="shrink-0">
                <Thumb
                  thumb={log.thumb}
                  media={log.media}
                  title={log.title}
                />
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-xl font-semibold transition group-hover:text-accent">
                  {log.title}
                </h2>
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-mute">
                  {log.description}
                </p>
                <p className="mt-3 font-mono text-xs text-mute">
                  {log.readTime} ·{' '}
                  <span className="text-accent">Read write-up →</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}