/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const selectorParser = require('postcss-selector-parser')
const { getColors } = require('theme-colors')

module.exports = ({ nuxt }) => ({
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        xs: { max: '599px' },
        sm: { min: '600px' },
        md: { min: '900px' },
        lg: { min: '1200px' },
        xl: { min: '1800px' },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['DM Mono', ...defaultTheme.fontFamily.mono],
        logo: ['General Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: getColors(nuxt.options.docs.primaryColor),
        black: getColors('#181818'),
        altblack: getColors('#2d2d2d'),
        altwhite: getColors('#fefefe'),
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              fontSize: '1rem',
            },
            a: {
              textDecoration: 'none',
              fontSize: '1.04rem',
              color: theme('colors.black.400'),
              fontWeight: '600',
              transition: 'all 0.2s ease-out',
              '&:hover': {
                color: theme('colors.black.700'),
              },
            },
            h1: {
              color: '#2d2d2d',
              fontWeight: 'bold',
              fontSize: '56px',
              lineHeight: '95%',
              letterSpacing: '-0.03em',
              marginBottom: '0.25em',
            },
            h2: {
              color: '#2d2d2d',
              fontWeight: 'bold',
              fontSize: '42px',
              lineHeight: '95%',
              marginTop: '0.75em',
              marginBottom: '0.75em',
              borderBottomWidth: '0px',
            },
            h3: {
              color: '#2d2d2d',
              fontWeight: 'bold',
              fontSize: '36px',
              lineHeight: '95%',
              borderBottomWidth: '0px',
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            h4: {
              color: '#2d2d2d',
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '95%',
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            h5: {
              color: '#2d2d2d',
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '95%',
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            blockquote: {
              fontWeight: '400',
              color: theme('colors.gray.600'),
              fontStyle: 'normal',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
            code: {
              fontWeight: '400',
              backgroundColor: theme('colors.gray.100'),
              padding: theme('padding.1'),
              borderWidth: 1,
              borderColor: theme('colors.gray.200'),
              borderRadius: theme('borderRadius.default'),
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            'h3 code': {
              fontWeight: '600',
            },
            'pre code': {
              fontFamily: 'DM Mono',
            },
            'a code': {
              color: theme('colors.primary.500'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),

            '[class~="lead"]': {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.gray.300'),
              '&:hover': {
                color: theme('colors.gray.100'),
              },
            },
            strong: {
              color: theme('colors.gray.100'),
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
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.gray.700'),
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.800'),
            },
            h3: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.800'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            'figure figcaption': {
              color: theme('colors.gray.400'),
            },
            code: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.800'),
              borderWidth: 0,
            },
            'a code': {
              color: theme('colors.primary.500'),
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.700'),
            },
          },
        },
      }),
      maxHeight: {
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      inset: {
        16: '4rem',
      },
      transitionProperty: {
        padding: 'padding',
      },
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus, dark-hover'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus'],
    borderWidth: ['responsive', 'first', 'last'],
    typography: ['responsive', 'dark'],
  },
  plugins: [
    plugin(function ({ addVariant, prefix, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return selectorParser((selectors) => {
            selectors.walkClasses((sel) => {
              sel.value = `dark${separator}${sel.value}`
              sel.parent.insertBefore(sel, selectorParser().astSync(prefix('.dark-mode ')))
            })
          }).processSync(selector)
        })
      })

      addVariant('dark-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-mode .${e(`dark-hover${separator}${className}`)}:hover`
        })
      })

      addVariant('dark-focus', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-mode .${e(`dark-focus${separator}${className}`)}:focus`
        })
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwind-css-variables')({
      colors: 'color',
      screens: false,
      fontFamily: false,
      fontSize: false,
      fontWeight: false,
      lineHeight: false,
      letterSpacing: false,
      backgroundSize: false,
      borderWidth: false,
      borderRadius: false,
      width: false,
      height: false,
      minWidth: false,
      minHeight: false,
      maxWidth: false,
      maxHeight: false,
      padding: false,
      margin: false,
      boxShadow: false,
      zIndex: false,
      opacity: false,
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      path.join(nuxt.options.rootDir, 'components/**/*.vue'),
      path.join(__dirname, 'components/**/*.vue'),
      path.join(__dirname, 'layouts/**/*.vue'),
      path.join(__dirname, 'pages/**/*.vue'),
      path.join(__dirname, 'plugins/**/*.js'),
      'nuxt.config.js',
    ],
    options: {
      safelist: ['dark-mode'],
    },
  },
})
