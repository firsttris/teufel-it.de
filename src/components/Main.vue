<template>
  <div class="container-fluid text-center">
    <div class="row image height550" :class="heading.titleImageClass">
      <headingComponent :title="heading.title" :subtitle="heading.subtitle"></headingComponent>
    </div>

    <div class="row pt-3">
      <div class="col">
        <subHeadingComponent :title="portfolio.title" :text="portfolio.text"></subHeadingComponent>
        <div class="row py-3">
          <portfolioComponent v-for="card in portfolio.cards" :title="card.title" :icon="card.iconClass"
                              :text="card.text" :class="card.gridClass"></portfolioComponent>
        </div>
      </div>
    </div>

    <div class="row image" :class="heading.contentImageClass">
    </div>

    <div class="row black py-3">
      <div class="col">
        <subHeadingComponent :title="principles.title" :text="principles.text"></subHeadingComponent>
        <div class="row py-3">
          <principlesComponent :title="card.title" :icon="card.iconClass" :text="card.text" :class="card.gridClass"
                               v-for="card in principles.cards"></principlesComponent>
        </div>
      </div>
    </div>

    <div class="row image" :class="heading.titleImageClass">
    </div>

    <div class="row py-3">
      <div class="col">
        <subHeadingComponent title="kontakt" text="Kontaktieren Sie uns über"></subHeadingComponent>
        <profilComponent></profilComponent>
        <contactComponent></contactComponent>
      </div>
    </div>

    <impressumComponent class="py-3"></impressumComponent>
  </div>
</template>
<script>
  import portfolioComponent from './Portfolio.vue'
  import principlesComponent from './Principles.vue'
  import headingComponent from './Heading.vue'
  import impressumComponent from './Impressum.vue'
  import subHeadingComponent from './SubHeading.vue'
  import contactComponent from './Contact.vue'
  import profilComponent from './Profil.vue'
  export default {
    components: {
      portfolioComponent,
      principlesComponent,
      headingComponent,
      impressumComponent,
      subHeadingComponent,
      contactComponent,
      profilComponent
    },
    props: ['heading', 'portfolio', 'principles'],
    data () {
      return {
        startFade: false
      }
    }
  }
</script>
<style lang="stylus" src="./Main.styl" scoped>
</style>
