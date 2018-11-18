<template>
  <section
    class="container b-g-gray"
    style="margin-top: 130px; margin-bottom: 50px"
  >
    <div>
      <a class="center">
        <img
          src="/kachel-auge.jpg"
          style="box-shadow: 12px 12px 12px -6px rgba(0,0,0,.45);">
      </a>
      <h3 class="mb-4">
        {{ item.title }}
      </h3>
      <p>
        {{ item.body }}
      </p>
      <p>
        <img :src="item.image">
      </p>
      <nuxt-link
        to="/art"
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
    }
  }
}
</script>
