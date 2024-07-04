import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import slider3d from '../components/slider3d.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/slider3d',
    name: 'slider3d',
    component: slider3d,
  },
  
    
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
