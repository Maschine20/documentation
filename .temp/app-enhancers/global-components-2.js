import Vue from 'vue'
Vue.component("OtherComponent", () => import("/Users/rafal/Documents/Programming/Own_Adapter/documentation/src/.vuepress/components/OtherComponent"))
Vue.component("demo-component", () => import("/Users/rafal/Documents/Programming/Own_Adapter/documentation/src/.vuepress/components/demo-component"))
Vue.component("Foo-Bar", () => import("/Users/rafal/Documents/Programming/Own_Adapter/documentation/src/.vuepress/components/Foo/Bar"))
Vue.component("Badge", () => import("/Users/rafal/Documents/Programming/Own_Adapter/documentation/node_modules/@vuepress/theme-default/global-components/Badge"))
Vue.component("CodeGroup", () => import("/Users/rafal/Documents/Programming/Own_Adapter/documentation/node_modules/@vuepress/theme-default/global-components/CodeGroup"))
Vue.component("CodeBlock", () => import("/Users/rafal/Documents/Programming/Own_Adapter/documentation/node_modules/@vuepress/theme-default/global-components/CodeBlock"))


export default {}