// src/stores/cart.ts
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    product: {
      name: 'Camiseta Ignite Lab',
      price: 79.99
    },
    quantity: 1
  }),
  actions: {
    addToCart() {
      console.log("Adicionando ao carrinho...");
      this.quantity++
    },
    removeFromCart() {
      if (this.quantity > 0) {
        console.log("Removendo do carrinho...");
        this.quantity--
      }
    },
    getTotal() {
      return this.product.price * this.quantity
    }
  }
})
