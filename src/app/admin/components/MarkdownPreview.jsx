'use client'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { Prose } from '@/components/Prose'

export function MarkdownPreview({ content }) {
  return (
    <div className="max-h-[75vh] overflow-y-auto rounded border border-rule bg-surface p-5">
      <p className="mb-4 font-mono text-2xs uppercase tracking-[0.14em] text-mute">
        Preview
      </p>
      <Prose className="max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content || '*Nothing to preview yet.*'}
        </ReactMarkdown>
      </Prose>
    </div>
  )
}