import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('/src/views/LoginView.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('/src/views/MainView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
