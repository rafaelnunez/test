<template>
  <v-navigation-drawer permanent app>
    <v-list>
      <v-list-item>
        <v-list-item-title> Mascotas shop </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <h1>Categorias</h1>
    <template v-if="loading">
      <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
    </template>
    <template v-else>
      <v-list v-for="(category, index) in categories" :key="index" nav dense>
        <v-list-item link>
          <v-list-item-title>{{ category.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { get, call } from "vuex-pathify"
export default {
  data() {
    return {}
  },
  created() {
    this.getProductCategories()
  },
  computed: {
    loading: get("products/loading"),
    categories: get("products/productCategories"),
    isEmptyCategories() {
      let isEmpty = this.categories.lenght > 0
      return isEmpty
    }
  },
  methods: {
    getProductCategories: call("products/getProductCategoriesAction")
  }
}
</script>

<style scoped>
h1 {
  margin-left: 15px;
}
</style>
