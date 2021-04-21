export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Mathew Dacosta',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Games programmer, open source developer' },
      { hid: 'keywords', name: 'keywords', content: 'game developer, programming, c++, opengl, development, software, sdl, open source' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@aceforth/nuxt-netlify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Buefy options (https://github.com/buefy/nuxt-buefy + https://buefy.org/documentation/constructor-options/)
  buefy: {
    css: false // include our customised CSS instead
  },

  // PWA module configuration (https://pwa.nuxtjs.org/)
  pwa: {
    icon: {
      sizes: [16, 32, 64, 120, 144, 152, 192, 384, 512]
    },
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      favicon: true,

      name: 'Mathew Dacosta',
      author: 'Mathew Dacosta',
      description: 'Games programmer, open source developer',
      theme_color: '#2d99ae',

      ogHost: "https://mathewdacosta.dev",
      ogImage: true,

      twitterCard: 'summary',
      twitterSite: '@MathewDacosta',
      twitterCreator: '@MathewDacosta'
    },
    manifest: {
      name: 'Mathew Dacosta\'s Portfolio',
      short_name: 'Mathew Dacosta',
      background_color: '#2d99ae',
      // Prevent annoying "add to home screen" prompt - I'm not an app
      display: 'browser'
    },
    workbox: { }
  }
}
