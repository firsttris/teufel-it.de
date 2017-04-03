<template>
  <div class="header">
    <ul>
      <li @click="development = true, strategie = false, projekte = false">
        <router-link to="/" v-bind:class="{ red: development }">Entwicklung</router-link>
      </li>
      <li @click="development = false, strategie = true, projekte = false">
        <router-link to="/it-strategieberatung" v-bind:class="{ red: strategie }">Beratung</router-link>
      </li>
      <li @click="development = false, strategie = false, projekte = true">
        <router-link to="/softwareentwicklung" v-bind:class="{ red: projekte }">Projekte</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        development: false,
        strategie: false,
        projekte: false
      }
    },
    created: function () {
      const route = this.$route.path.replace('/', '')
      if (route === 'strategieberatung') {
        this.development = false
        this.projekte = false
        this.strategie = true
      }
      if (route === '') {
        this.development = true
        this.projekte = false
        this.strategie = false
      }
      if (route === 'softwareentwicklung') {
        this.development = false
        this.projekte = true
        this.strategie = false
      }
    }
  }
</script>
<style lang="stylus" src="./Navigation.styl" scoped>
</style>
