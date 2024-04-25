import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'input:-webkit-autofill': {
    '-webkit-animation-delay': '1s',
    '-webkit-animation-name': 'autofill',
    '-webkit-animation-fill-mode': 'both',
    '-webkit-box-shadow': '0 0 0px 1000px $colors$gray900 inset',
    '-webkit-text-fill-color': '$colors$gray100',
  },
})
