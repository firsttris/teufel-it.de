<template>
  <div>
    <mainComponent :heading="headingJson" :portfolio="portfolioJson" :principles="principlesJson">
    </mainComponent>
  </div>
</template>
<script>
  import mainComponent from './Main.vue'
  import headingJson from './../assets/json/strategieberatung/heading.json'
  import portfolioJson from './../assets/json/strategieberatung/portfolio.json'
  import principlesJson from './../assets/json/strategieberatung/principles.json'
  export default {
    components: {
      mainComponent
    },
    data () {
      return {
        headingJson: headingJson,
        portfolioJson: portfolioJson,
        principlesJson: principlesJson
      }
    }
  }
</script>
