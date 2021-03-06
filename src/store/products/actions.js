import { getProduct, getProductCategories, getProducts } from "@/api/product"
import store from "@/store"

const actions = {
  /**
   * Función para obtener todos los productos
   * @author   Rafael Nuñez Manotas
   * @return   {String}
   */
  getProductsAction() {
    return new Promise(async (resolve, reject) => {
      try {
        store.set("products/loading", true)
        const { data } = await getProducts()
        if (data) {
          store.set("products/products", data)
        }
        resolve(data)
      } catch (e) {
        reject(e)
      } finally {
        store.set("products/loading", false)
      }
    })
  },
  /**
   * Función para obtener un producto
   * @author   Rafael Nuñez Manotas
   * @param    {String} id    ID del producto
   * @return   {String}
   */
  getProductAction(id) {
    return new Promise(async (resolve, reject) => {
      try {
        store.set("products/loading", true)
        const { data } = await getProduct(id)
        if (data) {
          store.set("products/product", data)
          store.set("products/loading", false)
        }
        resolve(data)
      } catch (e) {
        reject(e)
      } finally {
        store.set("products/loading", false)
      }
    })
  },
  /**
   * Función para obtener todos las categrias de los productos
   * @author   Rafael Nuñez Manotas
   * @return   {String}
   */
  getProductCategoriesAction() {
    return new Promise(async (resolve, reject) => {
      try {
        store.set("products/loading", true)
        const { data } = await getProductCategories()
        if (data) {
          store.set("products/productCategories", data)
          store.set("products/loading", false)
        }
        resolve(data)
      } catch (e) {
        reject(e)
      } finally {
        store.set("products/loading", false)
      }
    })
  },
  /**
   * Función agregar producto al carrito
   * @author   Rafael Nuñez Manotas
   */
  setAddProductCartAction(context, product) {
    let productsSelect = store.get("products/productsSelect")
    let selectedProductIndex = productsSelect.findIndex(p => p.id === product.id)
    if (selectedProductIndex > -1) {
      productsSelect[selectedProductIndex].quantity++
    } else {
      productsSelect.push({ ...product, quantity: 1 })
    }
    store.set("products/productsSelect", productsSelect)
  },
  /**
   * Función eliminar producto del carrito
   * @author   Rafael Nuñez Manotas
   */
  removeProductCartAction(context, index) {
    let productsSelect = store.get("products/productsSelect")
    productsSelect.splice(index, 1)
    store.set("products/productsSelect", productsSelect)
  }

  // createAddonAction(context, payload) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       store.set("addons/loading", true)
  //       const { data } = await createAddon(payload.idMembership, payload.body)
  //       if (data) {
  //         store.set("addons/loading", false)
  //       }
  //       resolve()
  //     } catch (e) {
  //       reject(e)
  //     } finally {
  //       store.set("addons/loading", false)
  //     }
  //   })
  // },
  // updateAddonAction(context, payload) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       store.set("addons/loading", true)
  //       const { data } = await updateAddon(payload.id, payload.body)
  //       if (data) {
  //         store.set("addons/loading", false)
  //       }
  //       resolve()
  //     } catch (e) {
  //       reject(e)
  //     } finally {
  //       store.set("addons/loading", false)
  //     }
  //   })
  // },
  // deleteAddonAction(context, id) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       store.set("addons/loading", true)
  //       const { data } = await deleteAddon(id)
  //       if (data) {
  //         store.set("addons/loading", false)
  //       }
  //       resolve()
  //     } catch (e) {
  //       reject(e)
  //     } finally {
  //       store.set("addons/loading", false)
  //     }
  //   })
  // }
}

export default actions
