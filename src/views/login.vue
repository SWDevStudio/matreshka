<template>
  <form>
    <label>
      Login
      <input
        type="text"
        v-model="form.login"
      >
    </label>
    <br>
    <label>
      password
      <input
        type="text"
        v-model="form.password">
    </label>
    <button
      @click.prevent="sendForm"
    >
      Отправить форму
    </button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'login',
  data: () => ({
    form: {
      login: '',
      password: ''
    }
  }),
  methods: {
    sendForm () {
      this.$sendRequest()
    }
  }
})
</script>

<style lang="stylus">

</style>
