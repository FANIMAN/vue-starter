import { createRouter, createWebHistory } from 'vue-router'
import SamplePage from '../pages/SamplePage.vue'

let routes = [
  {
    path: '/',
    name: '/',
    component: SamplePage,
  }
]

const router = createRouter({
  history: createWebHistory(''),
  routes,
  linkActiveClass: 'active',
})

export default router
