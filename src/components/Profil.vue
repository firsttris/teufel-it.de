<template>
  <div>
    <a v-for="profil in profiles" class="fa fa-2x margin10" :class="profil.icon" aria-hidden="true"
       :href="profil.link" target="_blank"></a>
  </div>
</template>
<script>
  import profilJson from './../assets/json/profil.json'
  export default {
    components: {
    },
    data () {
      return {
        profiles: profilJson
      }
    }
  }
</script>
<style lang="stylus" src="./Profil.styl" scoped>
</style>
