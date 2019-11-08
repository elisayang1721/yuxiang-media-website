import Vue from 'vue'
import VueRouter from 'vue-router'

// page
import Home from '@v/Home/index'
import Contact from '@v/Contact/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  scrollBehavior(to, from, saveTop) {
    if (saveTop) {
      return saveTop
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/')
  } else {
    next()
  }
})

export default router
