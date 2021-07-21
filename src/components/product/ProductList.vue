<template>
  <div v-if="loading">
    <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
  </div>
  <div class="container" v-else>
    <ProductCard
      @searchProducts="searchProducts"
      v-for="(product, index) in filteredProducts"
      :key="index"
      :product="product"
      @openModal="openModal"
    />
    <ProductModal
      v-if="openProductModal"
      :product="product"
      :open-modal="openProductModal"
      @close="closeProductModal"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue"
import ProductModal from "@/components/product/ProductModal.vue"
import { get, call } from "vuex-pathify"
export default {
  data() {
    return {
      openProductModal: false,
      product: null,
      searchQueryProduct: ""
    }
  },
  created() {
    this.getProducts()
  },
  computed: {
    loading: get("products/loading"),
    products: get("products/products"),
    filteredProducts: function () {
      return this.products
        ? this.products.filter(p =>
            p.name.toLowerCase().match(this.searchQueryProduct.toLowerCase())
          )
        : this.products
    }
  },
  components: {
    ProductCard,
    ProductModal
  },
  methods: {
    getProducts: call("products/getProductsAction"),
    openModal(product) {
      this.product = product
      this.openProductModal = true
    },
    closeProductModal() {
      this.openProductModal = false
    },
    searchProducts(query) {
      this.searchQueryProduct = query
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
}
</style>
