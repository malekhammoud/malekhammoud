'use client'

import { useState } from 'react'

export function EnhancedIframe(props) {
  const [isLoading, setIsLoading] = useState(true)

  // Maintain original styling but add our loader logic
  const wrapperStyle = {
    height: props.height ? (String(props.height).includes('%') ? props.height : `${props.height}px`) : '400px',
    width: props.width ? (String(props.width).includes('%') ? props.width : `${props.width}px`) : '100%',
    ...props.style
  }

  // Remove width/height from iframe to let wrapper handle sizing
  const { width, height, style, className, ...iframeProps } = props;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className || ''}`} style={wrapperStyle}>
      <iframe 
        {...iframeProps}
        onLoad={() => setIsLoading(false)}
        className="absolute inset-0 w-full h-full border-0 z-10"
      />
    </div>
  )
}
