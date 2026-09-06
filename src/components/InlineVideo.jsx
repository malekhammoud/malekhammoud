'use client'

import clsx from 'clsx'

/**
 * A muted, looping demo on the dark stage used for code blocks. Motion only
 * where motion is the point — everything else gets a MediaFrame still.
 */
export function InlineVideo({ sources, caption, ratio = 'aspect-[16/9]', className, ...props }) {
  return (
    <figure className={clsx('my-10 first:mt-0', className)}>
      <div
        className={clsx(
          'overflow-hidden rounded border border-deep-rule bg-deep',
          ratio,
        )}
      >
        <video
          className="h-full w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          {...props}
        >
          {sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      </div>
      {caption ? (
        <figcaption className="mt-2 font-mono text-xs text-mute">{caption}</figcaption>
      ) : null}
    </figure>
  )
}