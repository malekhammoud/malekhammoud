import Image from 'next/image'
import clsx from 'clsx'

/**
 * One framed still: 1px rule border, panel backing, a mono caption in the
 * same voice as the footnotes. Width/height come from the data so the frame
 * holds its place while the image loads.
 */
export function MediaFrame({ src, alt, width, height, caption, className, priority = false }) {
  return (
    <figure className={clsx('my-10 first:mt-0', className)}>
      <div className="overflow-hidden rounded border border-rule bg-panel">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 768px) 46rem, 100vw"
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 font-mono text-xs text-mute">{caption}</figcaption>
      ) : null}
    </figure>
  )
}