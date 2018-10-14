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
        {{ header }}
      </h3>
      <h4>{{ subHeader }}</h4>
      <p>{{ text }}</p>

      <nuxt-link
        to="/music"
        class="button--lila bottom">
        Music
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    header: {
      default: '',
      type: String
    },
    subHeader: {
      default: '',
      type: String
    },

    text: {
      default: '',
      type: String
    },

    img: {
      default: '',
      type: String
    }
  }
}
</script>
