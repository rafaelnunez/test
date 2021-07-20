<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>Producto</v-card-title>
        <v-divider></v-divider>
        <div class="container">
          <v-img max-width="200" :src="product.photo"></v-img>
          <div>
            <v-card-text>Nombre : {{ product.name }}</v-card-text>
            <v-card-text>Código : {{ product.code }}</v-card-text>
            <v-card-text>Precio : {{ product.price }}</v-card-text>
            <v-card-text>Cantidad: {{ product.price }}</v-card-text>
            <v-card-text>Subtotal: {{ product.price }}</v-card-text>
          </div>
        </div>
        <v-card-text class="text-wrap">{{ product.description }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"> Seguir comprando </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false"> Agregar al carrito </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    openModal: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  created() {
    this.dialog = this.openModal
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>
