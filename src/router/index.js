import { createWebHistory, createRouter } from "vue-router";
import Inner from "@/layouts/Inner.vue";
import Index from "@/views/Index.vue";
import PreviousOrders from "@/views/Orders/PreviousOrders.vue";

import NotFound from "@/views/Error.vue";
// routes

const routes = [
  {
    path: "/orders",
    component: Inner,
    children: [
      {
        path: "/previous-orders",
        component: PreviousOrders,
        meta: { breadcrumb: true },
      },
    ],
  },
  {
    path: "/",
    component: Index,
  },

  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  base: process.env.VUE_APP_URL,
  routes,
});

export default router;
