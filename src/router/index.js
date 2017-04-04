import Vue from 'vue'
import Strategieberatung from '../components/Strategieberatung.vue'
import Development from '../components/Development.vue'
import NotFound from '../components/NotFound.vue'
import VueRouter from 'vue-router'
import Projekte from '../components/Projekte.vue'
import SendToKodi from '../components/SendToKodi.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'development',
      component: Development,
      meta: {
        title: 'Teufel IT, Webentwicklung, Anwendungsentwicklung, Geschäftsanwendungen'
      }
    },
    {
      path: '/it-strategieberatung',
      name: 'strategieberatung',
      component: Strategieberatung,
      meta: {
        title: 'Teufel IT, Strategieberatung in Bühl, Baden-Baden, Rastatt, Karlsruhe und Umgebung'
      }
    },
    {
      path: '/softwareentwicklung',
      name: 'softwareentwicklung',
      component: Projekte,
      meta: {
        title: 'Teufel IT, Softwareentwicklung in Bühl, Baden-Baden, Rastatt, Karlsruhe und Umgebung'
      }
    },
    {
      path: '/sendtokodi',
      name: 'sendtokodi',
      component: SendToKodi,
      meta: {
        title: 'Teufel IT, Send almost any link to Kodi with, SendToKodi'
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      meta: {
        title: 'Not Found'
      }
    },
    { path: '*', redirect: '/404' }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.afterEach((to, from, next) => {
  if (process.BROWSER) {
    document.title = to.meta.title
  }
})

export default router
