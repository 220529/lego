import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Index from "../views/Index.vue";
import Home from "../views/Home.vue";
import Template from "../views/Template.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "template/:id",
        name: "template",
        component: Template,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import(/* webpackChunkName: "about" */ "../views/Editor.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
