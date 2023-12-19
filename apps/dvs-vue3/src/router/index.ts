import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home.vue";
import LocationView from "../views/LocationView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/location",
    name: "location",
    component: LocationView
  }
];

const router = createRouter({
  history: createWebHistory("/dvs-vue3/"),
  routes
});

export default router;
