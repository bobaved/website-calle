<template>
  <section class="container">
    <art-article
      v-for="art in $store.state.art"
      :key="art._path"
      :item="art"
      :list-page="true"/>

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ArtArticle from '~/components/ArtArticle.vue'
export default {
  components: {
    Logo,
    'art-article': ArtArticle
  }
}
</script>
