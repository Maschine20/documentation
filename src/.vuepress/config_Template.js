const {description} = require('../../package');
const fs = require("fs");
const path = require("path");
const itemTranslationArray = {}
const sideBarTranslationArray = {}
const items = [
    {text: 'Overview', link: '/languages/en/_Overview/'},
    {text: 'ESPHome', link: '/languages/en/ESPHome/'},
    {text: 'Klipper-Moonraker', link: '/languages/en/Klipper-Moonraker/'},
    // {text: 'WLED', link: '/languages/en/WLED/'},
    {text: 'SourceAnalytix', link: '/languages/en/SourceAnalytix/'},
    {text: 'Tado', link: '/languages/en/Tado/'},
];
const sideBar = [
    {
        title: 'Overview',   // required
        path: '/languages/en/_Overview/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        childrenFolder: `/languages/en/_Overview/`,
    },
    {
        title: 'BasicSetup',   // required
        path: '/languages/en/BasicSetup/',  // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 5,    // optional, defaults to 1
        childrenFolder: '/languages/en/BasicSetup/',
    },
    {
        title: 'ESPHome',   // required
        path: '/languages/en/ESPHome/',  // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 5,    // optional, defaults to 1
        childrenFolder: '/languages/en/ESPHome/',
    },
    {
        title: 'Klipper-Moonraker',   // required
        path: '/languages/en/Klipper-Moonraker/',  // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        childrenFolder: '/languages/en/Klipper-Moonraker/',
    },
    {
        title: 'SourceAnalytix',   // required
        path: '/languages/en/SourceAnalytix/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        childrenFolder: '/languages/en/SourceAnalytix/',
    },
    {
        title: 'Tado',   // required
        path: '/languages/en/Tado/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        childrenFolder: '/languages/en/Tado/',
    }]

itemTranslator(items);
sidebarTranslator(sideBar)
console.log(JSON.stringify(sideBarTranslationArray['EN']));
module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'DrozmotiX-OSS | OpenSource support for SmartHome Solutions',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: 'We love to share and hope this site will help you find your way in realising your personal Smart Home Solution',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'DrozmotiX-OSS | OpenSource support for SmartHome Solutions',
            description: 'We love to share and hope this site will help you find your way in realising your personal Smart Home Solution',
        },
        '/languages/de/': {
            lang: 'de-DE',
            title: 'DrozmotiX-OSS | OpenSource support für SmartHome Lösungen',
            description: 'Wir lieben es wissen zu teilen und hoffen, dass diese Website Ihnen dabei hilft, Ihren Weg zur Verwirklichung Ihrer persönlichen Smart Home-Lösung zu finden',
        },
        // '/languages/nl/': {
        //   lang: 'nl-NL',
        //   title: 'DrozmotiX | Adapter Dokummentatie',
        //   description: 'Een overzicht van mijn OpenSource Projecten',
        // },
    },

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: 'DrozmotiX/documentation',
        editLinks: true,
        docsDir: 'src',
        docsBranch: 'main',
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'You can help us by editing this page hier',
                sidebar: sideBarTranslationArray['EN'],
                nav: [
                    {
                        text: 'Adapter',
                        ariaLabel: 'Language Menu',
                        items: itemTranslationArray['EN']
                    },
                    {text: 'Support Me', link: 'http://paypal.me/DutchmanNL'},
                ],
            },
            '/languages/de/': {
                label: 'Deutsch',
                selectText: 'Sprachen',
                editLinkText: 'Sie können uns helfen, indem Sie diese Seite hier bearbeiten ',
                sidebarDepth: 3,
                sidebar: sideBarTranslationArray['DE'],
                nav: [
                    {
                        text: 'Adapter',
                        ariaLabel: 'Sprachen Menu',
                        items: itemTranslationArray['DE']
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
        [
            '@vuepress/google-analytics',
            {
                'ga': '' // UA-00000000-0
            }
        ],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github',
            owner: 'DrozmotiX',
            repo: 'documentation',
            clientId: '',
            clientSecret: '',
        }],
        '@vuepress/last-updated',
        '@vuepress/back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@vuepress/search'
    ]
}

// Translate item array to all languages
function itemTranslator(items) {
    itemTranslationArray['EN'] = items;
    itemTranslationArray['DE'] = [];
    for (const item in items) {
        itemTranslationArray['DE'].push(
            {
                text: items[item].text,
                link: items[item].link.replace('en', 'de')
            })
    }
}

function sidebarTranslator(sidebar) {
    sideBarTranslationArray['EN'] = [];
    sideBarTranslationArray['DE'] = [];
    for (const entry in sidebar){
        // sidebar[entry].childrenFolder = sidebar[entry].childrenFolder.replace('en', 'de');
        let childrenFolder = sidebar[entry].childrenFolder;
        let path = sidebar[entry].path;
        sideBarTranslationArray['EN'].push(
            {
                "title": sidebar[entry].title,
                "path": path,
                "collapsable": sidebar[entry].collapsable,
                "sidebarDepth": sidebar[entry].sidebarDepth,
                "children": getSideBar(childrenFolder),
            }
        )
        childrenFolder = sidebar[entry].childrenFolder.replace('en', 'de')
        path = sidebar[entry].path.replace('en', 'de');
        sideBarTranslationArray['DE'].push(
            {
                "title": sidebar[entry].title,
                "path": path,
                "collapsable": sidebar[entry].collapsable,
                "sidebarDepth": sidebar[entry].sidebarDepth,
                "children": getSideBar(childrenFolder),
            }
        )
    }
    console.log(JSON.stringify(sideBarTranslationArray['EN']))
}

function getSideBar(folder) {
    let children = []
    const extension = ['.md'];
    let files = fs
        .readdirSync(path.join(`${__dirname}/../${folder}`))
        .filter(
            (item) =>
                item.toLowerCase() !== 'readme.md' &&
                fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
                extension.includes(path.extname(item))
        );

    for (const filesKey in files) {
        children.push(`${folder}${files[filesKey].replace(/.md/g, '')}`)
    }
    return children
}
