import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: "/",
    meta: {requiresAuth: true},
    component: () => import('../components/index')
  }
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory('/im/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {left: 0, top: 0};
  }
})

export default router
