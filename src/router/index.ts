import * as VueRouter from "vue-router";

import PageHome from "@/components/PageHome.vue";
import PageThreadShow from "@/components/PageThreadShow.vue";

const routes = [
  {
    path: "/",
    component: PageHome,
    name: "Home",
  },
  {
    path: "/thread/:id",
    component: PageThreadShow,
    name: "ThreadShow",
    props: true,
  },
];

const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHistory(),
});

export default router;
