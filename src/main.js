import Vue from 'vue';
import App from './App.vue';
import router from './router';
import moment from 'moment';
import GAuth from 'vue-google-oauth2'
import VueSimpleAlert from "vue-simple-alert";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD.MM.YYYY HH:mm')
  }
});
const GoogleOptions = {
  clientId: '798573591477-jmo3vpf1m0k0o3mlggus68nc7bc7jeou.apps.googleusercontent.com',
  scope: 'https://www.blogger.com/feeds/',
  prompt: 'select_account'
}
Vue.use(GAuth, GoogleOptions);
Vue.use(VueSimpleAlert);

Vue.component("VueFontawesome", require("vue-fontawesome-icon/VueFontawesome.vue").default);
new Vue({
  router,
  GAuth,
  render: h => h(App),
}).$mount('#app')