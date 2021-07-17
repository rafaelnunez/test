import store from "@/store"
import Vue from "vue"
import VueDayjs from "vue-dayjs-plugin"
import Vuelidate from "vuelidate"
import App from "./App.vue"
import "./assets/styles.scss"
import router from "./router"
import vuetify from "./plugins/vuetify"

Vue.use(Vuelidate)
Vue.use(VueDayjs)
// Load boot files inside ./boot. Inspired in quasar boot files.
// eslint-disable-next-line no-undef
const bootFiles = require.context("./boot", false, /\.js$/)
bootFiles.keys().forEach(modulePath => {
  const module = bootFiles(modulePath)
  module.default({ Vue, router, store }) // default export from module
})

Vue.config.productionTip = false
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app")
