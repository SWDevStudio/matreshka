<template>
  <div class="home">
    <img src="/img/main-preview.png" alt="">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ipcRenderer } from 'electron'

export default Vue.extend({
  name: 'Home',
  components: {},
  methods: {
    async click () {
      // ipcRenderer.sendSync('message', {
      //   user: 'name'
      // })
      // const res = await this.axios({
      //   method: 'GET',
      //   url: 'https://oauth.vk.com/authorize?client_id=6121396&scope=1073737727&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1'
      // })
      // console.log(res)
    }
  }
})
</script>
<style lang="stylus">
.home {
  img {
    display block
    max-width 100vw
    max-height 100vh
  }
}
</style>
