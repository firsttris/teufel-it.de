<template>
  <div class="container-fluid lines">
    <div class="row py-3 image much_code">
      <headingComponent title="[ teufel-it ]" subtitle="Software ist unser Handwerk"></headingComponent>
    </div>

    <div class="container py-4">
      <div class="row py-2 text-center">
        <div class="col">
      <subHeadingComponent title="Software" text="Open Source Software Projekte"></subHeadingComponent>
        </div>
      </div>

      <div class="row py-3">
        <div class="col-xs-12 col-md-4 col-lg-4 py-2">
          <div class="card">
            <i class="fa fa-5x fa-youtube-play iconBig card-img-top" aria-hidden="true"></i>
            <div class="card-block">
              <h4 class="card-title">SendToKodi</h4>
              <p>iOS App</p>
              <p>Swift App kommuniziert über Json-Rpc mit dem Kodi MediaCenter</p>
              <p class="card-text">Mit "SendToKodi" ist es möglich Links aus verschiedenen Apps an Kodi zu senden.</p>
              <router-link to="/sendtokodi" class="btn btn-secondary">Mehr</router-link>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-md-4 col-lg-4 py-2">
          <div class="card">
            <i class="fa fa-5x fa-video-camera iconBig card-img-top" aria-hidden="true"></i>
            <div class="card-block">
              <h4 class="card-title">IpcamViewer</h4>
              <p>Google Chrome Extension</p>
              <p>Chrome Extension auf Basis von Vue.js, Webpack und Bootstraps</p>
              <p class="card-text">Ipcam Viewer spielt JPEG und MJPEG Ipcam Streams im Multiview ab.</p>
              <a href="https://chrome.google.com/webstore/detail/ipcam-viewer/jjfknbejnpjndceceeefmofphphjiamb"
                 target="_blank" class="btn btn-secondary">Chrome Webstore</a>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-md-4 col-lg-4 py-2">
          <div class="card">
            <i class="fa fa-5x fa-trash iconBig card-img-top" aria-hidden="true"></i>
            <div class="card-block">
              <h4 class="card-title">Remove&Reload</h4>
              <p>Google Chrome Extension</p>
              <p>Chrome Extension auf Basis von Vue.js, Webpack und Bootstraps</p>
              <p class="card-text">Entfernt Browser Cache und Historie, aktualisiert oder entfernt alle Tabs.</p>
              <a href="https://chrome.google.com/webstore/detail/removereload/kcjbahochamceejpgjkniopafgdhkplb"
                 target="_blank" class="btn btn-secondary">Chrome Webstore</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-2">
        <div class="col">
          <div>
          <span>Weitere Referenzprojekte finden Sie auf </span>
          <a href="https://github.com/firsttris?utf8=%E2%9C%93&tab=repositories&q=&type=source&language=" target="_blank"
             class="fa fa-github"> Github</a>
          </div>
        </div>
      </div>


    </div>
    <div class="row py-3 image meeting">
    </div>

    <div class="row py-2 text-center">
      <div class="col">
        <subHeadingComponent title="kontakt" text="Kontaktieren Sie mich über"></subHeadingComponent>
        <profilComponent></profilComponent>
        <contactComponent></contactComponent>
      </div>
    </div>
    <impressumComponent class="py-3 text-center"></impressumComponent>
  </div>
</template>
<script>
  import contactComponent from './Contact.vue'
  import profilComponent from './Profil.vue'
  import headingComponent from './Heading.vue'
  import impressumComponent from './Impressum.vue'
  import subHeadingComponent from './SubHeading.vue'
  export default {
    components: {
      headingComponent,
      impressumComponent,
      subHeadingComponent,
      contactComponent,
      profilComponent
    },
    props: [],
    data () {
      return {}
    }
  }
</script>
<style lang="stylus" src="./Projekte.styl" scoped>
</style>
