import virtualScroll from './virtualScroll.vue'

virtualScroll.install = function (Vue) {
  Vue.component(virtualScroll.name, virtualScroll)
}

export default virtualScroll
