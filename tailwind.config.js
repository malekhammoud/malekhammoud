const typographyPlugin = require('@tailwindcss/typography')

const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  // Single committed light theme. No dark mode, no toggle.
  plugins: [typographyPlugin],
  theme: {
    // One tight scale. Density reads senior; the display sizes carry the page.
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
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Workshop steel, not paper. Six tokens, nothing else ships.
      surface: '#EAECEB',
      panel: '#E0E3E1',
      ink: '#17191D',
      mute: '#5A6066',
      rule: '#CFD3D1',
      accent: '#1E4D3B',
      // Dark surfaces, used only for code blocks.
      deep: '#16181C',
      'deep-rule': '#2B2F34',
      fog: '#9AA2A8',
      // The accent lifted for dark backgrounds (~8:1 on --deep).
      'accent-lift': '#8FBBAA',
    },
    borderRadius: {
      none: '0',
      DEFAULT: '2px',
      sm: '2px',
      full: '9999px',
    },
    extend: {
      fontFamily: {
        // Industrial grotesque, headlines and the wordmark only.
        display: ['var(--font-display)', 'ui-sans-serif', 'sans-serif'],
        // Serif for prose and the signature line.
        body: ['var(--font-body)', 'ui-serif', 'Georgia', 'serif'],
        // Years, dates, labels, footnotes.
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        measure: '68ch',
        copy: '46rem',
      },
      transitionDuration: {
        DEFAULT: '120ms',
      },
    },
    typography: typographyStyles,
  },
}