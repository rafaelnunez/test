import Vue from "vue"
import Vuex from "vuex"
import pathify from "vuex-pathify"
import addons from "./addons"

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [pathify.plugin],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    addons
  }
})

export default store
