import Vue from 'vue'

// svg
import '@svg/index'
import SvgIcon from '@c/SvgIcon'
import '@svg/icons/sprite/sprite.symbol.svg'

Vue.component('svgIcon', SvgIcon)

// style
import '@css/reset.sass'
import '@css/main.sass'


// event bus
const eventBus = {
  install() {
    Vue.prototype.$bus = new Vue()
  }
}
Vue.use(eventBus)

import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
