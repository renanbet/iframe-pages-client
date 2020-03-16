import Vue from 'vue'
import App from './App'
import './plugins/vuetify'
import router from './router'
import VueCurrencyFilter from 'vue-currency-filter'
import VueFriendlyIframe from 'vue-friendly-iframe'
import { store } from './store/store'

Vue.use(VueFriendlyIframe)

Vue.use(VueCurrencyFilter,
  {
    symbol: 'R$',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  }
)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
