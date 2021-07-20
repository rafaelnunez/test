<template>
  <div class="container mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="item in products" :key="item.id" cols="12" xs="6" sm="4" md="3" lg="2">
          <v-skeleton-loader v-if="loadingProducts" type="image"></v-skeleton-loader>
          <v-card v-else>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  <h6>{{item.name}}</h6>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-img :src="item.image" class="white--text align-end" height="200px"></v-img>
            <v-card-actions>
              <v-chip class="mr-2" color="red lighten-1" dark>
                <v-icon left small>euro_symbol</v-icon>
                {{parseInt(item.price).toFixed(2)}}
              </v-chip>
              <v-spacer></v-spacer>
              <v-btn icon v-on:click="addToCart(item)">
                <v-icon>add_shopping_cart</v-icon>
              </v-btn>
              <v-btn icon v-on:click="sharewithsheet.visible = true">
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-fab-transition>
        <v-btn
          fab
          color="red darken-1"
          v-scroll="onScrollBtn"
          v-show="showBtnScrollUp"
          @click="goToTop"
          dark
          fixed
          right
          bottom
        >
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-snackbar v-model="snackbar.visible" bottom :timeout="snackbar.timeout">
        {{ snackbar.text }}
      </v-snackbar>
      <v-bottom-sheet v-model="sharewithsheet.visible">
        <v-list>
          <v-subheader>Share with</v-subheader>
          <v-list-item
            @click="sharewithsheet.visible = false"
            v-for="tile in sharewithRows"
            :key="tile.title"
          >
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <img :src="tile.img" :alt="tile.title" />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{tile.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ["products"],
  data: () => {
    return {
      loadingProducts: true,
      cart: [],
      showBtnScrollUp: false,
      snackbar: {
        visible: false,
        timeout: 700,
        text: ""
      },
      sharewithsheet: {
        visible: false
      },
      sharewithRows: [
        {
          img: "https://cdn.vuetifyjs.com/images/bottom-sheets/keep.png",
          title: "Keep"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/bottom-sheets/inbox.png",
          title: "Inbox"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/bottom-sheets/hangouts.png",
          title: "Hangouts"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/bottom-sheets/messenger.png",
          title: "Messenger"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/bottom-sheets/google.png",
          title: "Google+"
        }
      ]
    };
  },
  watch: {
    cart: function() {
      this.$emit("addCart", this.cart);
    }
  },
  mounted: function() {
    this.cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

      setTimeout(() => (this.loadingProducts = false), 2000);
  },
  methods: {
    goToTop: function() {
      this.$vuetify.goTo(0);
    },
    onScrollBtn: function(event) {
      this.showBtnScrollUp =
        (window.pageYOffset || event.target.scrollTop || 0) > 40;
    },
    productAddedMessage: function() {
      this.snackbar.visible = true;
      this.snackbar.text = "Product added to your cart";
    },
    addToCart: function(item) {
      let indexProduct = this.cart.findIndex(p => p.id === item.id);
      if (indexProduct > -1) {
        let tempProduct = this.cart[indexProduct];
        this.cart.splice(indexProduct, 1);
        tempProduct.quantity++;
        this.cart.push(tempProduct);
      } else {
        item.quantity = 1;
        this.cart.push(item);
      }
      this.productAddedMessage();
    }
  }
};
</script>

<style>
.v-skeleton-loader__image {
  height: 308px;
}
</style>