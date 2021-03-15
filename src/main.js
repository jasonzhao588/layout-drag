import Vue from 'vue'
import App from './App.vue'
import './styles/utils.css'

import divDrag from "@/directives/div-drag.js"
Vue.directive("divDrag", divDrag)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')