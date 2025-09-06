import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExpandingCards from '../views/ExpandingCards.vue'
import ProgressSteps from '../views/ProgressSteps.vue'
import RotatingNav from '../views/RotatingNav.vue'

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
    {
      path: '/rotating-navigation',
      name: 'rotating-navigation',
      component: RotatingNav,
    },
  ],
})

export default router
