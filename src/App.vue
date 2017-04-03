<template>
  <div id="app">
    <navigationComponent></navigationComponent>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import navigationComponent from './components/Navigation.vue'
  export default {
    components: {
      navigationComponent
    },
    data () {
      return {}
    }
  }
</script>
<style lang="css" src="./../node_modules/bootstrap/dist/css/bootstrap.css">
</style>
<style lang="css" src="./../node_modules/font-awesome/css/font-awesome.css">
</style>
<style lang="stylus" src="./App.styl">
</style>
