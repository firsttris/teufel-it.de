<template>
  <div class="flipContainer" @click="flip = !flip" @mouseenter="flip = true" @mouseleave="flip = false">
    <div class="flipCard" v-bind:class="{ back: flip }">
      <div class="cards front">
        <i class="fa fa-5x iconBig" :class="icon" aria-hidden="true"></i>
        <div class="text-uppercase title">{{ title }}</div>
      </div>
      <div class="cards back">
        <br>
        <div class="cardBorder p-2">{{ text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['icon', 'title', 'text'],
    data () {
      return {
        flip: false
      }
    }
  }
</script>
<style lang="stylus" src="./Portfolio.styl" scoped>
</style>
