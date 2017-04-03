<template>
  <div class="row black">
    <div class="col-xs-12 col-md-4 col-lg-4">
      <div v-for="item in impressum.name" >{{item}}</div>
    </div>
    <div class="col-xs-12 col-md-4 col-lg-4">
      <div v-for="item in impressum.quellen" >{{item}}</div>
    </div>
    <div class="col-xs-12 col-md-4 col-lg-4">
      <div v-for="item in impressum.anschrift" >{{item}}</div>
    </div>
  </div>
</template>
<script>
  import impressumJson from './../assets/json/impressum.json'
  export default {
    components: {
    },
    data () {
      return {
        impressum: impressumJson
      }
    }
  }
</script>
<style lang="stylus" src="./Impressum.styl" scoped>
</style>
