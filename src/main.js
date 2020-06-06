import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter("currency", (value) => {
  return "N" + value.toLocaleString();
});

Vue.http.options.root = "https://vuejs-http-1e380.firebaseio.com/";

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
