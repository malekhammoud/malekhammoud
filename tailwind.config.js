const typographyPlugin = require('@tailwindcss/typography')

const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  plugins: [typographyPlugin],
  theme: {
    fontSize: {
       xs: ['0.8125rem', { lineHeight: '1.5rem' }],
       sm: ['0.875rem', { lineHeight: '1.5rem' }],
     // xs: ['1rem', { lineHeight: '1.75rem' }],
     // sm: ['1rem', { lineHeight: '1.75rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.125rem', { lineHeight: '1.75rem' }],
      /*
      '2xl': ['1.125rem', { lineHeight: '1.75rem' }],
      '3xl': ['1.125rem', { lineHeight: '1.75rem' }],
      '4xl': ['1.125rem', { lineHeight: '1.75rem' }],
      '6xl': ['1.125rem', { lineHeight: '1.75rem' }],
      '7xl': ['1.125rem', { lineHeight: '1.75rem' }],
      '8xl': ['1.125rem', { lineHeight: '1.75rem' }],
      '9xl': ['1.125rem', { lineHeight: '1.75rem' }],
       */
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      animation: {
        'scroll': 'scroll 60s linear infinite',
        'scroll-reverse': 'scroll-reverse 45s linear infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glitch': 'glitch 2s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        glitch: {
          '0%, 98%': { transform: 'translate(0)' },
          '1%': { transform: 'translate(-2px, 2px)' },
          '2%': { transform: 'translate(2px, -2px)' },
          '3%': { transform: 'translate(-2px, 2px)' },
          '4%': { transform: 'translate(2px, -2px)' },
        },
      },
    },
    typography: typographyStyles,
  },
}
