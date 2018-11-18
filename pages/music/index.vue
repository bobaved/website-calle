<template>
  <section class="container">
    <music-article
      v-for="music in $store.state.music"
      :key="music._path"
      :item="music"
      :list-page="true"/>

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import MusicArticle from '~/components/MusicArticle.vue'

export default {
  components: {
    Logo,
    'music-article': MusicArticle
  }
}
</script>
