/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
// import About from "@/pages/About.vue";
import Order from "@/pages/Order.vue";
import Success from "@/pages/Success.vue";
import Settings from "@/pages/Settings.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

import { getAuth } from "firebase/auth";
import firebaseConfig from "@/store/config"
const routes = [
  {
    path: "/",
    component: Home,
  },
  /*   {
      path: "/about",
      component: About,
    }, */
  {
    path: "/Order",
    meta: { auth: true },
    component: Order,
  },
  {
    path: "/successOrder",
    meta: { auth: true },
    component: Success,
  },
  {
    path: "/settingsUser",
    meta: { auth: true },
    component: Settings,
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  },
  {
    path: '/notfound',
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const user = getAuth().currentUser;
  const requireAuth = to.matched.some((record) => record.meta.auth)
  if (requireAuth && !user) {
    next('/')
  } else {
    next()
  }

})

export default router;
