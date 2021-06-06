<template>
  <div class="side-bar">
    <div class="side-bar__menu">
      <router-link to="/">
        <img src="/img/add-line.svg" alt="">
      </router-link>
      <router-link to="/">
        <img src="/img/star-line.svg" alt="">
      </router-link>
      <router-link to="/">
        <img src="/img/settings-3-line.svg" alt="">
      </router-link>
      <router-link to="/">
        <img src="/img/search-2-line.svg" alt="">
      </router-link>
    </div>
    <div class="side-bar__menu">
      <router-link to="/">
        <img src="/img/vk-circle.svg" alt="">
      </router-link>
      <router-link to="/">
        <img src="/img/facebook-circle-line.svg" alt="">
      </router-link>
      <router-link to="/">
        <img src="/img/twitter-circle.svg" alt="">
      </router-link>
      <router-link to="/">
        <img src="/img/whatsapp-line.svg" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-bar'
}
</script>

<style scoped lang="stylus">
.side-bar {
  background-color #ECECEB
  padding 10px 5px
}
</style>
