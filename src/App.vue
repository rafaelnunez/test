<template>
  <v-app>
    <Navbar @searchProducts="searchProducts" :cart="cart" :subtotalCart="subtotalCart" />
    <v-skeleton-loader class="mx-auto" max-width="300" type="list-item-title"></v-skeleton-loader>
    <CategoryProduct />
    <v-content>
      <MainLayout />
    </v-content>
  </v-app>
</template>

<script>
import MainLayout from "./components/MainLayout.vue"
import Navbar from "@/components/Navbar"
import CategoryProduct from "@/components/product/CategoryProduct.vue"

export default {
  name: "App",
  data() {
    return {
      cart: [],
      products: []
    }
  },
  components: {
    MainLayout,
    Navbar,
    CategoryProduct
  },
  computed: {
    subtotalCart: function () {
      let sum = 0
      this.cart.map(p => {
        sum += parseInt(p.price) * p.quantity
      })

      return sum
    },
    filteredProducts: function () {
      return this.products
        ? this.products.filter(p => p.name.toLowerCase().match(this.searchQuery.toLowerCase()))
        : this.products
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  width: 100%;
}
#drawer {
  background: rgba(240, 240, 240, 1);
}
</style>
