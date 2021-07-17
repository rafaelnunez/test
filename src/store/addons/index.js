import { make } from "vuex-pathify"
import actions from "./actions"

const inistialState = () => ({
  addonsMembership: null,
  addons: null,
  addon: null,
  loading: false
})

const state = inistialState()

const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
