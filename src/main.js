import Vue from 'vue'
import App from './App.vue'

import virtualScroll from '../packages/index'

Vue.use(virtualScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
