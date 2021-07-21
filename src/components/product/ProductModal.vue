<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <v-card-title> <v-icon @click="close">mdi-close</v-icon> Producto</v-card-title>
        <v-divider></v-divider>
        <div class="container">
          <v-img max-width="200" :src="product.photo"></v-img>
          <div>
            <v-card-text>Nombre : {{ product.name }}</v-card-text>
            <v-card-text>Código : {{ product.code }}</v-card-text>
            <v-card-text>Precio : {{ product.price }}</v-card-text>
          </div>
        </div>
        <v-card-text class="text-wrap">{{ product.description }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-2" color="red darken-1" outlined text @click="close">
            Seguir comprando
          </v-btn>
          <v-btn color="red" text @click="addToCart"> Agregar al carrito </v-btn>
        </v-card-actions>
        <v-snackbar v-model="snackbar.visible" bottom :timeout="snackbar.timeout">
          {{ snackbar.text }}
        </v-snackbar>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import utils from "@/mixins/utils"
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
  mixins: [utils],
  data() {
    return {
      dialog: false
    }
  },
  created() {
    this.dialog = this.openModal
  },
  methods: {
    close() {
      this.$emit("close", false)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>
