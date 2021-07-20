<template>
  <div v-if="loading">
    <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
  </div>
  <div class="container" v-else>
    <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    <ProductModal v-if="openProductModal" :product="product" open-modal="openProductModal" />
  </div>
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue"
import ProductModal from "@/components/product/ProductModal.vue"
import { get, call } from "vuex-pathify"
export default {
  data() {
    return {}
  },
  created() {
    this.getProducts()
  },
  computed: {
    loading: get("products/loading"),
    products: get("products/products")
  },
  components: {
    ProductCard,
    ProductModal
  },
  methods: {
    getProducts: call("products/getProductsAction")
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
}
</style>
