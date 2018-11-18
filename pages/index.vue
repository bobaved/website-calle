<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
          calle-malmstroem
        </h1>
        <h2 class="subtitle">
          Website for Calle
        </h2>
        <h1>Im da real H1</h1>
        <p>
          Here goes some swedish text
        </p>
        <div class="links">
          <a
            href="#"
            target="_blank"
            class="button--green">Button green</a>
          <a
            href="#"
            target="_blank"
            class="button--grey">Button grey</a>
          <a
            href="#"
            target="_blank"
            class="button--turquoise">Button blue</a>
          <a
            href="#"
            target="_blank"
            class="button--purple">Button purple</a>
          <a
            href="#"
            target="_blank"
            class="button--lila">Button purple</a>
        </div>
      </div>

    </section>
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
