import config from 'config'

export default {
  mode: 'spa',

  head: {
    title: 'Nuxt Vuetify 2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~/assets/styles/app.scss'
  ],

  plugins: [],

  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/vuetify',
    'vue-chimera/nuxt'
  ],

  axios: {
    baseURL: config.get('baseURL')
  },

  build: {
    extend (config, ctx) {
    }
  },

  i18n: {
    locales: [
      { code: 'en', file: 'en.js' },
      { code: 'fa', file: 'fa.js' }
    ],
    defaultLocale: 'en',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    parsePages: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: null
    },
    strategy: 'prefix'
  },

  chimera: {
  },

  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true,
    rtl: false,
    lang: {
      locales: { en: {}, fa: {} },
      t (key, ...params) {
        return window.$nuxt.$i18n.t(key, params)
      },
      current: 'en'
    }
  }
}
