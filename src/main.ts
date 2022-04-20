import { createApp } from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";

import PageHome from "./components/PageHome.vue";

const routes = [
  {
    path: '/',
    component: PageHome,
    name: 'Home',
  },
];

const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHistory(),
});

createApp(App).use(router).mount("#app");
