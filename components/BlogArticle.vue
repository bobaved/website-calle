<template>
  <section
    class="container b-g-gray"
    style="margin-top: 130px; margin-bottom: 50px; padding-bottom: 30px; padding-top: 30px;"
  >
    <div>
      <h3 class="mb-4">
        {{ item.title }}
      </h3>
      <p>
        {{ item.body }}
      </p>
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
