import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import { IsAuth } from "../utils/persist";
import Home from "../views/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    name: "Auth",
    path: "/auth",
    component: Auth,
  },
  {
    name: "Home",
    path: "/",
    component: Home,
  },


];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, _, next) => {
  const publicPages = ["/auth"];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !IsAuth()) {
    return next("/auth");
  }

  next();
});

export { router };
