export const hasModulePlugin = store => {
  store.hasModule = function (pathArray) {
    let m = store._modules.root
    return pathArray.every(p => {
      m = m._children[p]
      return m
    })
  }
}

export const registerModuleOncePlugin = store => {
  store.registerModuleOnce = function registerModuleOnce(path, rawModule, opts) {
    // Path can be an array or a string: ['my', 'nested', 'module'] or 'my/nested/module'
    const pathArray = path instanceof Array ? path : path.split("/")
    if (store.hasModule(pathArray)) {
      return false
    }
    return store.registerModule(pathArray, rawModule, opts)
  }
}
