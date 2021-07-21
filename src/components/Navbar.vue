<template>
  <v-app-bar app color="red" center dense dark>
    <v-spacer></v-spacer>
    <v-text-field
      hide-details
      prepend-icon="mdi-magnify"
      placeholder="Buscar producto..."
      single-line
      v-model="searchQueryProduct"
      class="d-none d-sm-flex"
    ></v-text-field>
    <ProductCart />
  </v-app-bar>
</template>

<script>
import ProductCart from "@/components/product/ProductCart.vue"
import utils from "@/mixins/utils"

export default {
  name: "Navbar",
  props: ["cart", "subtotalCart"],
  mixins: [utils],
  data: () => {
    return {
      searchQueryProduct: ""
    }
  },
  components: {
    ProductCart
  },
  watch: {
    searchQueryProduct: function () {
      this.$emit("searchProducts", this.searchQueryProduct)
    }
  }
}
</script>

<style scoped>
.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input {
  color: blue !important;
}
</style>
