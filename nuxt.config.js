import path from 'path'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'battle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'sierra-library/lib/index.scss',
    // 'element-ui/lib/theme-chalk/display.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/index.scss',
  ],
  styleResources: {
    scss: ['@/assets/css/color.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/element-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // transpile: [/^element-ui/],
    extend(config, ctx) {
      // Run ESLint on save

      const vueLoader = config.module.rules.find(
        (loader) => loader.loader === 'vue-loader'
      )

      /* 把audio标签在编译时转成src属性 */

      vueLoader.options.transformToRequire = {
        audio: 'src',
      }

      /* 对mp3等格式的文件用url-loader进行处理 */

      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,

        loader: 'url-loader',

        options: {
          limit: 10000,
          name:
            process.env.NODE_ENV === 'production'
              ? path.posix.join('./', 'media/[name].[hash:7].[ext]')
              : path.posix.join('./', 'media/[name].[hash:7].[ext]'),
        },
      })

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',

          test: /\.(js|vue)$/,

          loader: 'eslint-loader',

          exclude: /(node_modules)/,
        })
      }
    },
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          },
        ],
      ],
    },
  },
}
