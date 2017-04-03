<template>
  <div class="caption">
    <div class="block">
      <div class="header text-uppercase">{{title}}</div>
      <div class="subheader">{{subtitle}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['title', 'subtitle'],
    data () {
      return {
      }
    }
  }
</script>
<style lang="stylus" src="./Heading.styl" scoped>
</style>
