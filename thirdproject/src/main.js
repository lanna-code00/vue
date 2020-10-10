import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import myObj from "./store/store";

Vue.config.productionTip = false

new Vue({
  store: myObj,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
