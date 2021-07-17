import exampleWidget from "./widgets/example"
import exampleStore from "./store/example"

const install = (Vue, options = {}) => {
  // Register vuex modules
  if (options.store) {
    options.store.registerModule("example", exampleStore)
  }

  // Register component
  Vue.component("sm-example", exampleWidget)
}

export default install

// Separate export, for installing only what you need
export { exampleStore, exampleWidget }
