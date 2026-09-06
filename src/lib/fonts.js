import { Archivo, Newsreader, Martian_Mono } from 'next/font/google'

// Industrial grotesque, highway-signage lineage. The width axis is what makes
// the headlines read as engineering signage rather than another startup sans.
export const displayFont = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-display',
})

// Serif body — reads as documentation, not marketing.
// Next has no metric overrides for Newsreader, so the automatic size-adjust
// fallback is disabled and a close serif is named explicitly. Without this the
// build warns and the swap is measured against a mismatched default.
export const bodyFont = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  adjustFontFallback: false,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

// Spec labels, figure numbers, data.
export const monoFont = Martian_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
})