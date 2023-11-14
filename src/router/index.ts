import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/Search.vue'
import Favorite from '../views/Favorite.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Search
    },
    {
      path: '/favoritos',
      component: Favorite
    }
  ]
})

export default router