<template>
  <div>
    <section class="container">

      <div class="p-t-180 p-b-60"/>

    </section>
    <blog-article
      v-for="post in $store.state.posts"
      :key="post._path"
      :item="post"/>
    <artArticle
      v-for="art in $store.state.art"
      :key="art._path"
      :item="art"/>
    <musicArticle
      v-for="music in $store.state.music"
      :key="music._path"
      :item="music"/>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import BlogArticle from '~/components/BlogArticle.vue'
import ArtArticle from '~/components/ArtArticle.vue'
import MusicArticle from '~/components/MusicArticle.vue'

export default {
  components: {
    Logo,
    blogArticle: BlogArticle,
    artArticle: ArtArticle,
    musicArticle: MusicArticle
  }
}
</script>
