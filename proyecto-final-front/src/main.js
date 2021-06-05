import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notifications'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(Notifications)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
