<template>
  <v-menu offset-y :close-on-content-click="false" min-width="370px" max-height="500px">
    <template v-slot:activator="{ on: menu }">
      <v-tooltip disabled>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn text dark v-on="{ ...tooltip, ...menu }">
            <v-icon>mdi-cart</v-icon>
            <v-badge :content="countProductSelect" color="red darken-4" inline></v-badge>
          </v-btn>
        </template>
        <span>Cart</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-list v-if="productsSelect.length > 0">
        <v-list-item v-for="(product, index) in productsSelect" :key="index">
          <v-list-item-avatar>
            <img :src="product.photo" :alt="product.name" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-col cols="8">
              <v-list-item-title>{{ product.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ renderMoney(product.price) }}</v-list-item-subtitle>
            </v-col>
            <v-col cols="4">
              <v-text-field
                type="Number"
                filled
                solo
                dense
                flat
                hide-details
                v-model="product.quantity"
                min="1"
                max="100"
                background-color="blue-grey lighten-5"
              ></v-text-field>
            </v-col>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              elevation="0"
              color="red light-4"
              dark
              fab
              width="15px"
              height="15px"
              @click="removeCart(index)"
            >
              <v-icon size="10">mdi-close</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-container style="padding-bottom: 0px">
          <v-row>
            <v-col cols="9" class="text-right">Subtotal:</v-col>
            <v-col cols="3" class="text-right">
              <strong style="color: #388e3c">{{ renderMoney(subTotal) }}</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                block
                color="red darken-1"
                elevation="0"
                dark
                :loading="loadingCheckoutBtn"
                @click="loadingCheckoutBtn = true"
                >COMPRAR</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-list>
      <v-list v-if="productsSelect.length < 1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>No tienes productos en el carrito</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { get } from "vuex-pathify"
import utils from "@/mixins/utils"

export default {
  name: "Navbar",
  mixins: [utils],
  data: () => {
    return {
      loadingCheckoutBtn: false
    }
  },
  computed: {
    productsSelect: get("products/productsSelect"),
    countProductSelect() {
      return this.productsSelect.length.toString()
    },
    subTotal() {
      let subTotal = 0
      for (let i = 0; i < this.productsSelect.length; i++) {
        subTotal += this.productsSelect[i].price
      }

      return subTotal
    }
  }
}
</script>
<style></style>
