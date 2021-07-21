import { call } from "vuex-pathify"

export default {
  data() {
    return {
      snackbar: {
        visible: false,
        timeout: 700,
        text: ""
      }
    }
  },
  methods: {
    addProduct: call("products/setAddProductCartAction"),
    removeProduct: call("products/removeProductCartAction"),
    addToCart() {
      this.addProduct(this.product)
      this.snackbar.visible = true
      this.snackbar.text = "Producto agregado al carrito."
    },
    removeCart(index) {
      this.removeProduct(index)
      this.snackbar.visible = true
      this.snackbar.text = "Producto eliminado del carrito."
    },
    renderDate(param) {
      return param ? this.$date(param).format("DD/MM/YYYY") : param
    },
    renderDateWithHyphen(param) {
      return param ? this.$date(param).format("YYYY-MM-DD") : param
    },
    renderMoney(param) {
      if (param === null || param === undefined) {
        return ""
      }
      return "$" + param.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    }
  }
}
