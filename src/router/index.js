import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'about',  
      component: AboutView
    },
    {
      path: '/portfolio',
      name: 'portfolio',  
      component: () => import('../views/PortfoliosView.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CV.vue')
    }
  ]
})

export default router
