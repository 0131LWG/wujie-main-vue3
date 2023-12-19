import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/vue3"
  },
  {
    path: "/vue3",
    name: "vue3",
    component: () => import(/* webpackChunkName: "about" */ "../views/Vue3.vue")
  },
  {
    path: "/vue3-sub/:path",
    name: "vue3-sub",
    component: () => import(/* webpackChunkName: "about" */ "../views/Vue3-sub.vue")
  },
  {
    path: "/react16",
    name: "react16",
    component: () => import(/* webpackChunkName: "about" */ "../views/React16.vue")
  },
  {
    path: "/react16-sub/:path",
    name: "react16-sub",
    component: () => import(/* webpackChunkName: "about" */ "../views/React16-sub.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
