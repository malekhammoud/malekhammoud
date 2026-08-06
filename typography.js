/*
  Prose styles for MDX content (/articles). Built from the site's six tokens —
  see tailwind.config.js. Deliberately dense: 68ch measure, serif body.
*/
module.exports = ({ theme }) => ({
  DEFAULT: {
    css: {
      '--tw-prose-body': theme('colors.ink'),
      '--tw-prose-headings': theme('colors.ink'),
      '--tw-prose-links': theme('colors.signal'),
      '--tw-prose-bold': theme('colors.ink'),
      '--tw-prose-counters': theme('colors.mute'),
      '--tw-prose-bullets': theme('colors.rule'),
      '--tw-prose-hr': theme('colors.rule'),
      '--tw-prose-quotes': theme('colors.ink'),
      '--tw-prose-quote-borders': theme('colors.signal'),
      '--tw-prose-captions': theme('colors.mute'),
      '--tw-prose-code': theme('colors.ink'),
      '--tw-prose-pre-code': theme('colors.paper'),
      '--tw-prose-pre-bg': theme('colors.deep'),
      '--tw-prose-th-borders': theme('colors.rule'),
      '--tw-prose-td-borders': theme('colors.rule'),

      maxWidth: theme('maxWidth.measure'),
      fontSize: theme('fontSize.lg')[0],
      lineHeight: '1.7',

      h1: {
        fontFamily: 'var(--font-display)',
        fontWeight: '700',
        fontSize: theme('fontSize.4xl')[0],
        letterSpacing: '-0.022em',
        marginTop: '0',
        marginBottom: '1.5rem',
      },
      h2: {
        fontFamily: 'var(--font-display)',
        fontWeight: '650',
        fontSize: theme('fontSize.2xl')[0],
        letterSpacing: '-0.015em',
        marginTop: '2.75rem',
        marginBottom: '0.875rem',
      },
      h3: {
        fontFamily: 'var(--font-display)',
        fontWeight: '600',
        fontSize: theme('fontSize.xl')[0],
        marginTop: '2rem',
        marginBottom: '0.625rem',
      },
      'h2 + *, h3 + *': { marginTop: '0' },

      p: { marginTop: '1.25rem', marginBottom: '1.25rem' },

      a: {
        fontWeight: '500',
        textDecoration: 'underline',
        textDecorationColor: theme('colors.rule'),
        textUnderlineOffset: '3px',
        transition: 'text-decoration-color 120ms',
      },
      'a:hover': { textDecorationColor: theme('colors.signal') },

      strong: { fontWeight: '650' },

      blockquote: {
        fontStyle: 'normal',
        borderLeftWidth: '2px',
        paddingLeft: '1.25rem',
        color: theme('colors.mute'),
      },
      'blockquote p:first-of-type::before': { content: 'none' },
      'blockquote p:last-of-type::after': { content: 'none' },

      code: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.84em',
        fontWeight: '400',
        backgroundColor: theme('colors.panel'),
        padding: '0.15em 0.4em',
        borderRadius: '2px',
      },
      'code::before': { content: 'none' },
      'code::after': { content: 'none' },

      pre: {
        fontFamily: 'var(--font-mono)',
        fontSize: theme('fontSize.sm')[0],
        lineHeight: '1.65',
        padding: '1.125rem 1.25rem',
        borderRadius: '3px',
        overflowX: 'auto',
      },
      'pre code': {
        backgroundColor: 'transparent',
        padding: '0',
        fontSize: 'inherit',
      },

      hr: { marginTop: '3rem', marginBottom: '3rem' },

      img: { borderRadius: '3px' },

      figcaption: {
        fontFamily: 'var(--font-mono)',
        fontSize: theme('fontSize.xs')[0],
        textTransform: 'uppercase',
        marginTop: '0.75rem',
      },

      table: {
        fontFamily: 'var(--font-mono)',
        fontSize: theme('fontSize.sm')[0],
        width: '100%',
      },
      thead: { borderBottomWidth: '1px' },
      'thead th': {
        fontWeight: '500',
        textTransform: 'uppercase',
        fontSize: theme('fontSize.xs')[0],
        letterSpacing: '0.06em',
        paddingBottom: '0.625rem',
      },
      'tbody td': { paddingTop: '0.625rem', paddingBottom: '0.625rem' },
    },
  },
})
