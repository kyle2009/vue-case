import Vue from 'vue';
import VueRouter from 'vue-router';
import VCharts from 'v-charts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import routerConfig from './router.config.js';
import Http from './api/http.js';
import XH from './script/formatData.js';

Vue.use(ElementUI);
Vue.use(VCharts);
Vue.use(VueRouter);

Vue.prototype.$Http = Http;
Vue.prototype.$XH = XH;

const router = new VueRouter(routerConfig);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
