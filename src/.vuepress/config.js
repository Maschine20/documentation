const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Tuto VuePress / Netlify',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'DutchmanNL | Adapter Documentation',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'DutchmanNL | Adapter Documentation',
      description: 'An overview of my open source software projects',
    },
    '/languages/de/': {
      lang: 'de-DE',
      title: 'DutchmanNL | Adapter Dokumentation',
      description: 'Eine übersicht meiner Open Source Software projekte',
    },
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        sidebar: [
          {
            title: 'SA',   // required
            path: '/languages/en/SourceAnalytix/',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            // sidebarDepth: 1,    // optional, defaults to 1
            children: [
              // '',
              '/languages/en/SourceAnalytix/initialisation',
              '/languages/en/SourceAnalytix/firstSteps',
            ]
          },
          // {
          //   title: 'Group 2',
          //   children: [ /* ... */ ],
          //   initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
          // }
        ],
        nav: [
          {text: 'SourceAnalytix', link: '/languages/en/SourceAnalytix/'},
          // {text: 'Bolt', link: '/fr/bolt/'},
          // {text: 'Goody', link: '/fr/goody/'},
          {text: 'Support Me', link: 'http://paypal.me/DutchmanNL'},
        ],
      },
      '/languages/de/': {
        label: 'Deutsch',
        selectText: 'Languages',
        // sidebar: {
        sidebar: [
          {
            title: 'SA',   // required
            path: '/languages/de/SourceAnalytix/',      // optional, link of the title, which should be an absolute path and must exist
            collapsable: true, // optional, defaults to true
            // sidebarDepth: 1,    // optional, defaults to 1
            children: [
              // '',
                '/languages/de/SourceAnalytix/initialisation',
              '/languages/de/SourceAnalytix/firstSteps',
            ]
          },
          {
            title: 'Group 2',
            children: [ /* ... */ ],
            initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
          }
        ],
        nav: [
          {text: 'SourceAnalytix', link: '/languages/de/SourceAnalytix/'},
          // {text: 'Bolt', link: '/fr/bolt/'},
          // {text: 'Goody', link: '/fr/goody/'},
          {text: 'Support Me', link: 'http://paypal.me/DutchmanNL'},
        ],
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['vuepress-plugin-code-copy', {
      align: 'top',
      staticIcon: true
    }
    ],
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/search'
  ]
}
