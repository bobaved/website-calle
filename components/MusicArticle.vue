<template>
  <section
    class="container b-g-gray"
    style="margin-top: 130px; margin-bottom: 50px"
  >
    <div>
      <a class="center">
        <img
          src="/music.png"
          style="box-shadow: 12px 12px 12px -6px rgba(0,0,0,.45);">
      </a>
      <h3 class="mb-4">
        {{ item.title }}
      </h3>
      <p>
        {{ item.body }}
      </p>
      <div v-html="item.iframe"/>
      <nuxt-link
        v-if="!listPage"
        to="/music"
        class="button--lila bottom button-shadow">
        Music
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      default() {
        return {}
      },
      type: Object
    },
    listPage: {
      default() {
        return false
      },
      type: Boolean
    }
  }
}
</script>
