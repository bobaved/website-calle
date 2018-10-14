<template>
  <section class="container">
    <div class="bg-danger">
      <h1 class="title">
        {{ product ? product.id : 'NIX' }}
      </h1>
      <h2 class="title">
        is static? {{ isStatic }}
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  async asyncData({ params, error, payload }) {
    if (payload) return { product: payload, isStatic: true }
    else {
      let products = [{ id: '1' }, { id: '2' }]

      let product = null

      for (let i = 0; i < products.length; i++) {
        if (products[i].id === params.id) {
          product = products[i]
        }
      }
      return { product: product, isStatic: false }
    }
  },

  components: {
    Logo
  }
}
</script>
