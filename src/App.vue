<template>
  <div class="doll">
    <side-bar/>
    <router-view/>
  </div>
</template>

<style lang="stylus">
  * {
    margin: 0
    padding: 0
    box-sizing border-box
  }

  .doll {
    width 100vw
    height 100vh
    background-color white
    display grid
    grid-template-columns 80px 1fr
  }
</style>
<script>
import SideBar from '@/components/side-bar'

export default {
  components: { SideBar }
}
</script>
