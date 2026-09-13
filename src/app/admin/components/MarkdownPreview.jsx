'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { Prose } from '@/components/Prose'
import { YouTubeEmbed } from '@/components/YouTubeEmbed'
import { extractYouTubeId, isYouTubeUrl } from '@/lib/youtube'

export function MarkdownPreview({ content }) {
  return (
    <div className="max-h-[75vh] overflow-y-auto rounded border border-rule bg-surface p-5">
      <p className="mb-4 font-mono text-2xs uppercase tracking-[0.14em] text-mute">
        Preview
      </p>
      <Prose className="max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            p: ({ children, ...props }) => {
              const flat = React.Children.toArray(children)
              const nonEmpty = flat.filter((c) => !(typeof c === 'string' && c.trim() === ''))
              if (nonEmpty.length === 1) {
                const only = nonEmpty[0]
                if (React.isValidElement(only) && only.props.href && isYouTubeUrl(only.props.href)) {
                  const id = extractYouTubeId(only.props.href)
                  if (id) return <YouTubeEmbed youtubeId={id} />
                }
                if (typeof only === 'string' && isYouTubeUrl(only.trim())) {
                  const id = extractYouTubeId(only.trim())
                  if (id) return <YouTubeEmbed youtubeId={id} />
                }
                const text = nonEmpty
                  .map((c) => {
                    if (typeof c === 'string') return c
                    if (React.isValidElement(c) && typeof c.props.children === 'string')
                      return c.props.children
                    if (React.isValidElement(c) && Array.isArray(c.props.children))
                      return c.props.children.join('')
                    return ''
                  })
                  .join('')
                  .trim()
                if (isYouTubeUrl(text)) {
                  const id = extractYouTubeId(text)
                  if (id) return <YouTubeEmbed youtubeId={id} />
                }
              }
              return <p {...props}>{children}</p>
            },
          }}
        >
          {content || '*Nothing to preview yet.*'}
        </ReactMarkdown>
      </Prose>
    </div>
  )
}