import { createRouter, createWebHistory } from 'vue-router'
import CV from '../views/CV/CV.cv.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CV
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV
    }
  ]
})

export default router
