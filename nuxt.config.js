export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - Craftable',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Siroshun09'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Siroshun\' personal site.'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Craftable'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://siroshun09.github.io'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Craftable'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Siroshun\'s personal site.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.imgur.com/mdyHJ7c.jpg'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ja_JP'
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'en_US'
      },

      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@Siroshun09'
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: '@Siroshun09'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/'
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/fontawesome.ts',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [require('frontmatter-markdown-loader/mode').VUE_COMPONENT],
          vue: {
            root: 'markdown-body'
          },
          markdownIt: {
            html: true,
            linkify: true,
            breaks: true,
            use: [
              [
                require('markdown-it-anchor'), {
                  permalink: true,
                  permalinkSymbol: '🔗',
                  slugify: (s) => String(s).trim().toLowerCase().replace(/\s+/g, '-').replace(/([^\w\-]+)/g, ''),
                }
              ],
              require('markdown-it-emoji'),
              require('markdown-it-highlightjs')
            ],
          }
        }
      })
    }
  },

  styleResources: {
    scss: [
      '@/assets/scss/_index.scss'
    ]
  },

  googleAnalytics: {
    id: 'G-0QZQ25GGX8'
  }
}
