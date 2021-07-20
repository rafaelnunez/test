import Vue from "vue"
import Vuex from "vuex"
import pathify from "vuex-pathify"
import products from "./products"

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [pathify.plugin],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products
  }
})

export default store
