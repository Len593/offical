import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/about.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('@/views/service/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    // 回到顶部
    window.scrollTo(0, 0)
  next()
})
export default router 