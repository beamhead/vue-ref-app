import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Info from "@/views/Info.vue";
import Example from "@/views/Example.vue";
import ExControlles from "@/views/ExControlles.vue";
import Tables from "@/views/ExTables.vue";
import Charts from "@/views/ExCharts.vue";
import Else from "@/views/Else.vue";
import Modal from "@/views/ModalPage.vue";
import Table from "@/views/Table.vue";
import Register from "@/views/Register.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass:
    "is-active" /* Makes choosed menu alternative highlighted */,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/table",
      name: "table",
      component: Table
    },
    {
      path: "/else",
      name: "else",
      component: Else
    },
    {
      path: "/examples",
      name: "examples",
      component: Example
    },
    {
      path: "/controlles",
      name: "controlles",
      component: ExControlles
    },
    {
      path: "/charts",
      name: "charts",
      component: Charts
    },
    {
      path: "/tables",
      name: "tables",
      component: Tables
    },
    {
      path: "/modal",
      name: "modal",
      component: Modal
    },
    {
      path: "/info",
      name: "info",
      component: Info
    },
    {
      path: "/signup",
      name: "register",
      component: Register
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
