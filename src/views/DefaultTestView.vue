<template>
  <div>
    <br />
    <h2>Default test Talana</h2>
    <ProductList />
    <!-- <v-alert border="top" color="red lighten-2" dark>
      I'm an alert with a top border and red color
    </v-alert>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table> -->
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
