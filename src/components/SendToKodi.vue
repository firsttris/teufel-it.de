<template>
  <div class="container-fluid">
    <div class="spacer">
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>SendToKodi</h2>
          <p><i>von Tristan Teufel</i></p>
          <img src="./../assets/images/SendToKodi/logo.jpg">
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <h3>Beschreibung </h3>
          <p>Mit "SendToKodi" kannst du direkt aus verschiedenen Apps Links an die Kodi Addons senden.<br>
            Öffne dazu einfach das "Share" Menü bei dem entsprechenden Video bzw. Lied und wähle aus den zur Verfügung
            stehenden Apps "SendToKodi" aus.<br>
            Anschließend kannst du den Link dann an Kodi senden.
          </p>
          <a :href="app.link" class="btn btn-primary" target="_blank">
            <i class="fa fa-apple" aria-hidden="true"></i>
            &nbsp;Appstore Link</a>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <h5>Unterstützte Addons:</h5>
          <ul>
            <li>Youtube</li>
            <li>Soundcloud</li>
            <li>Vimeo</li>
            <li>Twitch</li>
            <li>Mixcloud</li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-6">
          <img class="border" src="./../assets/images/SendToKodi/3.jpg">
        </div>
        <div class="col-xs-12 col-md-12 col-lg-6 mt-4">
          <img class="border" src="./../assets/images/SendToKodi/4.jpg">
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <h3>Reviews</h3>
          <div v-for="review in reviews">
            <div><b>{{review.title}}</b></div>
            <span><i>{{review.name}}&nbsp&nbsp</i></span>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <p>{{review.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    components: {},
    data () {
      return {
        reviews: [],
        app: {
          developer: '',
          title: '',
          image: '',
          link: ''
        }
      }
    },
    methods: {
      requestReview (country) {
        axios.get('https://itunes.apple.com/' + country + '/rss/customerreviews/id=1113517603/sortBy=mostRecent/json')
          .then((response) => {
            const entries = response.data.feed.entry
            for (const index in entries) {
              if (entries[index]['im:artist']) {
                this.app.developer = entries[index]['im:artist']['label']
                this.app.image = entries[index]['im:image'][2]['label']
                this.app.title = entries[index]['im:name']['label']
                this.app.link = entries[index].link.attributes.href
              } else {
                let review = {}
                review.name = entries[index].author.name.label
                review.text = entries[index].content.label
                review.rating = entries[index]['im:rating']['label']
                review.title = entries[index].title.label
                this.reviews.push(review)
              }
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    beforeMount () {
      const countries = ['de', 'us', 'gb', 'nl', 'ro']
      for (const index in countries) {
        this.requestReview(countries[index])
      }
    }
  }
</script>
<style lang="stylus" src="./SendToKodi.styl" scoped>
</style>
