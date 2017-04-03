<template>
  <div class="row">
    <div class="col">
      <div class="text-uppercase fontSize30Spacing10">{{ title }}</div>
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['title', 'text'],
    data () {
      return {
        flip: false
      }
    }
  }
</script>
<style lang="stylus" src="./SubHeading.styl" scoped>
</style>
