<template>
  <v-hover v-if="product" v-slot="{ hover }" open-delay="100">
    <v-card
      class="mx-auto my-12 card"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
      max-width="240"
      @click="openProduct()"
    >
      <v-img max-height="220" :src="productPhoto"></v-img>

      <v-card-text>
        <div class="my-4 text-title">{{ product.name }}</div>
        <h2>{{ renderMoney(product.price) }}</h2>
        <p>{{ stockCustom }}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve"> Agregar al carrito </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import utils from "@/mixins/utils"

export default {
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      openProductModal: false
    }
  },
  mixins: [utils],
  computed: {
    productPhoto() {
      let isNotEmptyPhoto = this.product.photo != ""
      let productPhoto = isNotEmptyPhoto
        ? this.product.photo
        : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"

      return productPhoto
    },
    stockCustom() {
      let stock = this.product.stock
      let response =
        stock == 0
          ? "No hay disponibles"
          : stock > 0 && stock < 11
          ? "Solo quedan " + stock
          : "Disponibles " + stock

      return response
    }
  },
  methods: {
    openProduct() {
      this.openProductModal = true
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  padding-top: 10px
</style>
