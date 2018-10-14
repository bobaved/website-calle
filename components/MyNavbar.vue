<template>
  <b-navbar
    variant="faded"
    type="light"
    fixed="top"
    toggleable="md"
    style="height: 64px; border-top: 5px solid #117a8b; border-bottom: 5px solid #117a8b;"
    class="background--green">

    <b-navbar-brand class="m-r-60">
      <nuxt-link to="/">C^M</nuxt-link>
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto mr-auto">
      <nuxt-link to="/">Calle Malmström</nuxt-link>
    </b-navbar-nav>

    <b-navbar-nav class="m-l-60">
      <b-nav-item right>
        <nuxt-link to="/">Home</nuxt-link>
      </b-nav-item>
      <b-nav-item right>
        <nuxt-link to="/music">Music</nuxt-link>
      </b-nav-item>
      <b-nav-item right>
        <nuxt-link to="/art">Art</nuxt-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {}
}
</script>


<style>
.bg-grey {
  background-color: #35495e;
}
.turquoise-modal {
  border: 3px solid #117a8b;
}
</style>
