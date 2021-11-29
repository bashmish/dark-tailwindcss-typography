const colors = require('tailwindcss/colors');

module.exports = {
  corePlugins: false,
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    extend: {
      typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme('colors.gray.300'),
              '[class~="lead"]': {
                color: theme('colors.gray.400'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.700'),
              },
              blockquote: {
                color: theme('colors.gray.100'),
                borderLeftColor: theme('colors.gray.700'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.300'),
                backgroundColor: 'rgb(0 0 0 / 50%)',
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.600'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          ],
        },
      }),
    },
  },
};
