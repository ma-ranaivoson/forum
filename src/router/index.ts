import * as VueRouter from "vue-router";
import sourceData from "@/data.json";

import Home from "@/pages/Home.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import NotFound from "@/pages/NotFound.vue";

const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/thread/:id",
    component: ThreadShow,
    name: "ThreadShow",
    props: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beforeEnter(to: any, from: any, next: any) {
      // Check if resources exists
      const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id);
      // Normal redirection if exists
      if (threadExists) {
        next();
        // Redirect to NotFound if not
      } else {
        next({
          name: "NotFound",
          params: { pathMatch: to.path.substring(1).split("/") },
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHistory(),
});

export default router;
