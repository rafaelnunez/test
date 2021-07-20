export default {
  methods: {
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
