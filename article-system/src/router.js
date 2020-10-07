import { createRouter, createWebHistory } from "vue-router";
import ResourceHome from "@/views/ResourceHome.vue";
import ResourceNew from "@/views/ResourceNew.vue";
import ResourceRoutes from "@/views/ResourceRoutes.vue"

const routes = [
  // =================================================================
  // { path: "/", component: ResourceHome },
  // { path: "/new", component: ResourceNew}

  // =================================================================
  // 重定向、定义名字
  // http://localhost:8080/resources
  { 
    path: "/", 
    name: "base", 
    redirect: { name: "resourceHomePage"} 
  },
  { 
    path: "/resources", 
    name: "resourceHomePage", 
    component: ResourceHome 
  },
  { 
    path: "/resources/new", 
    name: "resourceNewPage", 
    component: ResourceNew
  }

  // =================================================================
  // 子路由
  // { 
  //   path: "/", 
  //   name: "base", 
  //   redirect: { name: "resourceHomePage"} 
  // },
  // { 
  //   path: "/resources", 
  //   name: "resourceHomePage", 
  //   component: ResourceRoutes,
  //   children: [
  //     { 
  //       path: "",
  //       name: "resourceHome",
  //       component: ResourceHome,
  //     },
  //     { 
  //       path: "new",
  //       name: "resourceNewPage",
  //       component: ResourceNew,
  //     }
    // ]
  // }
];

const router = createRouter({
  history: createWebHistory(),
  //   routes: routes,
  routes,
  linkExactActiveClass: "active",
});

export default router;
