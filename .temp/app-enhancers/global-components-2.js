import Vue from 'vue'
Vue.component("OtherComponent", () => import("/Users/rafal/Desktop/DutchmanNL.github.io/docs/src/.vuepress/components/OtherComponent"))
Vue.component("demo-component", () => import("/Users/rafal/Desktop/DutchmanNL.github.io/docs/src/.vuepress/components/demo-component"))
Vue.component("Foo-Bar", () => import("/Users/rafal/Desktop/DutchmanNL.github.io/docs/src/.vuepress/components/Foo/Bar"))
Vue.component("Badge", () => import("/Users/rafal/Desktop/DutchmanNL.github.io/docs/node_modules/@vuepress/theme-default/global-components/Badge"))
Vue.component("CodeBlock", () => import("/Users/rafal/Desktop/DutchmanNL.github.io/docs/node_modules/@vuepress/theme-default/global-components/CodeBlock"))
Vue.component("CodeGroup", () => import("/Users/rafal/Desktop/DutchmanNL.github.io/docs/node_modules/@vuepress/theme-default/global-components/CodeGroup"))


export default {}