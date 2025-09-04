import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExpandingCards from '../views/ExpandingCards.vue'
import ProgressSteps from '../views/ProgressSteps.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/expanding-cards',
      name: 'expanding-cards',
      component: ExpandingCards,
    },
    {
      path: '/progress-steps',
      name: 'progress-steps',
      component: ProgressSteps,
    },
  ],
})

export default router
