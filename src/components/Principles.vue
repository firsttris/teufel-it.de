<template>
  <div class="py-2" @click="startFade = !startFade" @mouseenter="startFade = true" @mouseleave="startFade = false">
    <div class="verticalCenter">
      <i class="fa fa-2x colorTransition" v-bind:class="[{ colorWhite: startFade }, icon]" aria-hidden="true"></i>
      <span class="text-uppercase title">{{ title }}</span>
    </div>
    <p>{{ text }}</p>
  </div>
</template>
<script>
  export default {
    props: ['icon', 'title', 'text'],
    data () {
      return {
        startFade: false
      }
    }
  }
</script>
<style lang="stylus" src="./Principles.styl" scoped>
</style>
