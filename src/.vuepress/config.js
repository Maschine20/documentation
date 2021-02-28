const { description } = require('../../package');
const fs = require("fs");
const path = require("path");
const translationArray= {}
const items = [
  { text: 'ESPHome', link: '/languages/en/ESPHome/' },
  { text: 'WLED', link: '/languages/en/WLED/' },
  { text: 'SourceAnalytix', link: '/languages/en/SourceAnalytix/' },
];
itemTranslator(items);

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
    // '/languages/nl/': {
    //   lang: 'nl-NL',
    //   title: 'DutchmanNL | Adapter Dokummentatie',
    //   description: 'Een overzicht van mijn OpenSource Projecten',
    // },
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
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        sidebarDepth: 3,
        sidebar: {
          "/languages/en/introduction/": getSideBar(
              "/languages/de/introduction/",
              "Introduction",
          ),
          "/languages/en/ESPHome/": getSideBar(
              "/languages/de/ESPHome/",
              "ESPHome",
          ),
          "/languages/en/SourceAnalytix/": getSideBar(
              "/languages/de/SourceAnalytix/",
              "SourceAnalytix",
          ),
        },
        nav: [
          {
            text: 'Adapter',
            ariaLabel: 'Language Menu',
            items: translationArray['EN']
          },
          {text: 'Support Me', link: 'http://paypal.me/DutchmanNL'},
        ],
      },
      '/languages/de/': {
        label: 'Deutsch',
        selectText: 'Sprachen',
        sidebarDepth: 3,
        sidebar: {
          "/languages/de/introduction/": getSideBar(
              "/languages/de/introduction/",
              "Introduction",
          ),
          "/languages/de/ESPHome/": getSideBar(
              "/languages/de/ESPHome/",
              "ESPHome",
          ),
          "/languages/de/SourceAnalytix/": getSideBar(
              "/languages/de/SourceAnalytix/",
              "SourceAnalytix",
          ),
        },
        nav: [
          {
            text: 'Adapter',
            ariaLabel: 'Sprachen Menu',
            items: translationArray['DE']
          },
          {text: 'Unterstütze mich', link: 'http://paypal.me/DutchmanNL'},
        ],
      },
      // '/languages/nl/': {
      //   label: 'Nederlands',
      //   selectText: 'Languages',
      //   // sidebar: {
      //   sidebar: [
      //     {
      //       title: 'SourceAnalytix',   // required
      //       path: '/languages/nl/SourceAnalytix/',      // optional, link of the title, which should be an absolute path and must exist
      //       collapsable: true, // optional, defaults to true
      //       // sidebarDepth: 1,    // optional, defaults to 1
      //       children: [
      //         // '',
      //         '/languages/nl/SourceAnalytix/adapterConfig',
      //         '/languages/nl/SourceAnalytix/initialisation',
      //         '/languages/nl/SourceAnalytix/firstSteps',
      //       ]
      //     },
      //     // {
      //     //   title: 'Group 2',
      //     //   children: [ /* ... */ ],
      //     //   initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      //     // }
      //   ],
      //   nav: [
      //     {
      //       text: 'Adapter',
      //       ariaLabel: 'Language Menu',
      //       items: [
      //         { text: 'ESPHome', link: '/languages/nl/ESPHome/' },
      //         { text: 'WLED', link: '/languages/nl/WLED/' },
      //         { text: 'SourceAnalytix', link: '/languages/nl/SourceAnalytix/' },
      //       ]
      //     },
      //     {text: 'Support Me', link: 'http://paypal.me/DutchmanNL'},
      //   ],
      // },
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

function getSideBar(folder, title) {
  const extension = [".md"];
  let files = fs
      .readdirSync(path.join(`${__dirname}/../${folder}`))
      .filter(
          (item) =>
              item.toLowerCase() != "readme.md" &&
              fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
              extension.includes(path.extname(item))
      );
  return [{ title: title, children: ["", ...files] }];
}

  // Translate item array to all languages
  function itemTranslator(items) {
    translationArray['EN'] = items;
    translationArray['DE'] = [];
    for (const item in items){
      translationArray['DE'].push(
          {
            text: items[item].text,
            link: items[item].link.replace('en', 'de')
          })
    }
  }