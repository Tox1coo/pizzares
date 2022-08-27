import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Order from "@/pages/Order.vue";
import Success from "@/pages/Success.vue";
import Settings from "@/pages/Settings.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/Order",
    component: Order,
  },
  {
    path: "/successOrder",
    component: Success,
  },
  {
    path: "/settingsUser",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
