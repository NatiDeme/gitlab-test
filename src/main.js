import Vue from "vue";
import App from "./App.vue";
import "./style.css";
import VueRouter from "vue-router";
import { routes } from "./Routers";
import store from "./store/index";

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
