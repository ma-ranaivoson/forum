import * as VueRouter from "vue-router";
import sourceData from "@/data.json";

import PageHome from "@/components/PageHome.vue";
import PageThreadShow from "@/components/PageThreadShow.vue";
import PageNotFound from "@/components/PageNotFound.vue";

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
    component: PageNotFound,
  },
];

const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHistory(),
});

export default router;
