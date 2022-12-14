import Vue from 'vue'
import App from './App.vue'
import Utils from '../../src'

Vue.config.productionTip = false
Vue.use(Utils)

new Vue({
  render: h => h(App),
}).$mount('#app')
