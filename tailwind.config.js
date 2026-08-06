const typographyPlugin = require('@tailwindcss/typography')

const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  // Single committed light theme. No dark mode, no toggle — see the Phase 1 plan.
  plugins: [typographyPlugin],
  theme: {
    // "Datasheet" type scale. Tighter than the template's: density reads senior.
    fontSize: {
      '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      xs: ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0.06em' }],
      sm: ['0.8125rem', { lineHeight: '1.375rem' }],
      base: ['0.9375rem', { lineHeight: '1.6' }],
      lg: ['1.0625rem', { lineHeight: '1.65' }],
      xl: ['1.25rem', { lineHeight: '1.5' }],
      '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
      '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.018em' }],
      '4xl': ['2.375rem', { lineHeight: '1.1', letterSpacing: '-0.022em' }],
      '5xl': ['3.125rem', { lineHeight: '1.05', letterSpacing: '-0.026em' }],
      '6xl': ['4rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
      '7xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.032em' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // The whole palette. Six values plus two derivations — nothing else ships.
      paper: '#E7E4DC',
      panel: '#DEDAD0',
      ink: '#14161A',
      mute: '#5B6068',
      rule: '#C6C1B5',
      signal: '#1F35D6',
      deep: '#10131A',
      // Derivations, used only for inverted bands.
      'deep-rule': '#282C35',
      'deep-mute': '#9298A4',
    },
    borderRadius: {
      none: '0',
      DEFAULT: '3px',
      sm: '2px',
      md: '3px',
      lg: '5px',
      full: '9999px',
    },
    extend: {
      fontFamily: {
        // Industrial grotesque — headlines, nav, buttons.
        display: ['var(--font-display)', 'ui-sans-serif', 'sans-serif'],
        // Serif body. The unexpected move: reads as documentation, not marketing.
        body: ['var(--font-body)', 'ui-serif', 'Georgia', 'serif'],
        // Spec labels, figure numbers, data, code.
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        measure: '68ch',
        frame: '1140px',
      },
      spacing: {
        rail: '4.5rem', // the datasheet left margin
      },
      transitionDuration: {
        DEFAULT: '120ms',
      },
    },
    typography: typographyStyles,
  },
}
