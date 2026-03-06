import Image from 'next/image'
import { EnhancedIframe } from '@/components/EnhancedIframe'

export function useMDXComponents(components) {
  return {
    ...components,
    Image: (props) => <Image {...props} />,
    iframe: (props) => <EnhancedIframe {...props} />,
  }
}
