<template>
    <div>
      <a v-for="contact in contacts" class="btn btn-secondary margin10" :href="contact.link" target="_blank">{{contact.text}}</a>
    </div>
</template>
<script>
  import contactJson from './../assets/json/contact.json'
  export default {
    components: {
    },
    data () {
      return {
        contacts: contactJson
      }
    }
  }
</script>
<style lang="stylus" src="./Contact.styl" scoped>
</style>
