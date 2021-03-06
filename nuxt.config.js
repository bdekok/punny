
const isGithub = process.env.DEPLOY_ENV === 'GH_PAGES'
const githubUrl = '/punny/dist/'
const routerBase = isGithub ? {
  router: {
    base: githubUrl
  }
} : {}

export default {
  ...routerBase,
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: isGithub ? (githubUrl + 'favicon.ico') : '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#83e217' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios.ts',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/pwa',
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
