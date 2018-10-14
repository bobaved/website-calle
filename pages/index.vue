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
    <blogArticle
      header="My own Header1"
      sub-header="Do I want this?"
      text="HALLO"
      img="~/assets/kachel-auge.jpg"/>

    <blogArticle
      :bg-grey="true"
      header="My own Header2"
      sub-header="Do I want this?"
      text="HALLO"
      img="~/assets/kachel-auge.jpg"/>

    <blogArticle
      header="My own Header3"
      sub-header="Do I want this?"
      text="HALLO"
      img="~/assets/kachel-auge.jpg"/>

    <blogArticle
      :bg-grey="true"
      header="My own Header4"
      sub-header="Do I want this?"
      text="HALLO"
      img="~/assets/kachel-auge.jpg"/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Article from '~/components/Article.vue'

export default {
  components: {
    Logo,
    blogArticle: Article
  }
}
</script>
