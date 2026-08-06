import Image from 'next/image'

import { Callout } from '@/components/Callout'
import { EnhancedIframe } from '@/components/EnhancedIframe'

export function useMDXComponents(components) {
  return {
    ...components,
    // Available in every MDX file without an import.
    Callout,
    Image: (props) => <Image {...props} />,
    iframe: (props) => <EnhancedIframe {...props} />,
  }
}
