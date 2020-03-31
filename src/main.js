import Vue from 'vue'
import App from './components/app'
import vuetify from './plugins/vuetify';
import router from './router'
import VueFriendlyIframe from 'vue-friendly-iframe'
import { store } from './store/store'

Vue.use(VueFriendlyIframe)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
