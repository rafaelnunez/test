import { make } from "vuex-pathify"
import actions from "./actions"

const inistialState = () => ({
  products: [],
  product: null,
  productCategories: [],
  productsSelect: [],
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
