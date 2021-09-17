import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../layout/Layout";

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: 'home',
        name: 'Home',
        component:Home,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login")
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import("../views/Register")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
