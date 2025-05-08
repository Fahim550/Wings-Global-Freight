import { createRouter, createWebHistory } from 'vue-router'
import Career from '../views/Career.vue'
import Contact from '../views/Contact.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/career',
      name: 'career',
      component: Career,
    },
  ],
})

export default router
