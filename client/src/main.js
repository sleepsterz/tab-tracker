import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'md'
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
