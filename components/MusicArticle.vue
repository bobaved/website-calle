<template>
  <section
    class="container b-g-gray"
    style="margin-top: 130px; margin-bottom: 50px; padding-bottom: 30px; padding-top: 30px;"
  >
    <div>
      <nuxt-link
        v-if="!listPage"
        to="/music"
        class="center">
        <img
          src="/music.png"
          style="box-shadow: 12px 12px 12px -6px rgba(0,0,0,.45);"
          height="200"
          width="200">
      </nuxt-link>
      <h3 class="mb-4">
        {{ item.title }}
      </h3>
      <p>
        {{ item.body }}
      </p>
      <div
        style="box-shadow: 12px 12px 12px -6px rgba(0,0,0,.45);"
        v-html="item.iframe"/>
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
