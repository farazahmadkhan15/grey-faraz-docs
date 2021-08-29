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
    title: 'Documentation Website created with Grey Docs',
    meta: [{
      name: 'og:title',
      content: 'Grey Docs | Create docs with Markdown and Vue components!'
    },
    {
      name: 'og:description',
      content: 'Grey Docs is a node package to help you build beautiful documentation websites with Markdown and Vue components!'
    },
    {
      name: 'og:image',
      content: '/preview.png'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Grey Docs | Create docs with Markdown and Vue components!'
    },
    {
      name: 'twitter:description',
      content: 'Grey Docs is a node package to help you build beautiful documentation websites with Markdown and Vue components!'
    },
    {
      name: 'twitter:image',
      content: '/preview.png'
    },],
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
