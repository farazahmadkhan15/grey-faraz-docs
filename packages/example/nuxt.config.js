import remoteTheme from 'grey-docs'
import localTheme from '../grey-docs'

const config = {
  components: true,
  content: {
    liveEdit: false,
  },
  docs: {
    primaryColor: '#64748b',
  },
  head: {
    script: [
      {
        src: 'https://plausible.io/js/plausible.js',
        async: true,
        defer: true,
        'data-domain': '',
      },
    ],
  },
}

let themedConfig

if (process.env.NODE_ENV === 'production' && process.env.CONTEXT === 'production') {
  themedConfig = remoteTheme(config)
} else {
  themedConfig = localTheme(config)
}

export default themedConfig
