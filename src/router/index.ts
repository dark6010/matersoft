import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/Search.vue'
import Favorite from '../views/Favorite.vue'
import Detail from '../views/Detail.vue'
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
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ]
})

export default router