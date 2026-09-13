import clsx from 'clsx'

import { youtubeEmbedUrl } from '@/lib/youtube'

export function YouTubeEmbed({ youtubeId, caption, title, className, ratio = 'aspect-[16/9]' }) {
  if (!youtubeId) return null
  const embedUrl = youtubeEmbedUrl(youtubeId)
  return (
    <figure className={clsx('my-10 first:mt-0', className)}>
      <div className={clsx('overflow-hidden rounded border border-rule bg-deep', ratio)}>
        <iframe
          src={embedUrl}
          title={title || 'YouTube video player'}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 font-mono text-xs text-mute">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
