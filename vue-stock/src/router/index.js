import { createRouter, createWebHistory } from 'vue-router'
import StockView from '../views/StockView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: StockView,
    },
    {
      path: '/detalles',
      name: 'detalles',
      component: () => import('../views/DetallesView.vue'),
    },
  ],
})

export default router
