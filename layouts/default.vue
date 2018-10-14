<template>
  <div>
    <mynavbar/>
    <nuxt style="margin-top: 180px;"/>
  </div>
</template>
<script>
import MyNavbar from '~/components/MyNavbar.vue'

export default {
  components: {
    mynavbar: MyNavbar
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  text-align: center;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--turquoise {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #117a8b;
  color: #117a8b;
  background-color: #fff;
  text-decoration: none;
  padding: 10px 30px;
}

.button--turquoise:hover {
  color: #fff;
  background-color: #117a8b;
}

.button--purple {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #b30086;
  color: #b30086;
  background-color: #fff;
  text-decoration: none;
  padding: 10px 30px;
}

.button--purple:hover {
  color: #fff;
  background-color: #b30086;
}

.button--lila {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #660080;
  color: #660080;
  background-color: #fff;
  text-decoration: none;
  padding: 10px 30px;
}

.button--lila:hover {
  color: #fff;
  background-color: #660080;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  background-color: #fff;
  text-decoration: none;
  padding: 10px 30px;
}

.background--grey {
  background-color: #35495e;
}

.background--green {
  background-color: #3b8070;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.p-t-180 {
  padding-top: 180px;
}

.p-t-60 {
  padding-top: 60px;
}

.p-t-120 {
  padding-top: 120px;
}

.p-b-30 {
  padding-bottom: 60px;
}

.p-b-60 {
  padding-bottom: 60px;
}

.b-g-gray {
  background-color: #f2f2f5;
}

.m-b-30 {
  margin-bottom: 30px;
}

.m-t-60 {
  margin-top: 60px;
}

.m-b-60 {
  margin-bottom: 60px;
}

.m-b-120 {
  margin-bottom: 120px;
}

.m-r-30 {
  margin-right: 30px;
}

.m-r-60 {
  margin-right: 60px;
}

.m-r-30 {
  margin-left: 30px;
}

.m-r-60 {
  margin-left: 60px;
}

a {
  color: #000000;
}

.container {
  max-width: 100%;
}

.container div {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}

.center {
  position: relative;
  transform: translate(-50%, -50%);
  top: -75px;
}

.bottom {
  position: relative;
  bottom: -23px;
}
</style>
