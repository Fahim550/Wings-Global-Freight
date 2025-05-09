import { createRouter, createWebHistory } from 'vue-router'
import Career from '../views/Career.vue'
import Contact from '../views/Contact.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'
import OurVision from '../views/about/OurVision.vue'
import ImportService from '../views/services/ImportService.vue'
import Service from '../views/services/Services.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/our-vision',
      name: 'our vision',
      component: OurVision,
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
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/import-service',
      name: 'import service',
      component: ImportService,
    },
  ],
})

export default router
