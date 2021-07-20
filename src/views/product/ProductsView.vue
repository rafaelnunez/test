<template>
  <div>
    <br />
    <h2>Productos para tu mascota al mejor precio</h2>
    <br />
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/product/ProductList.vue"

export default {
  data() {
    return {}
  },
  components: {
    ProductList
  }
}
</script>

<style lang="scss" scoped></style>
