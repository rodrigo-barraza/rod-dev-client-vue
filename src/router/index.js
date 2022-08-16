import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AIArtView from '../views/AIArtView.vue'
import CollectionView from '../views/CollectionView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/works',
    name: 'works',
    component: HomeView
  },
  {
    path: '/works/:work',
    name: 'works',
    component: CollectionView
  },
  {
    path: '/photography',
    name: 'photography',
    component: HomeView
  },
  {
    path: '/ai-art',
    name: 'ai-art',
    component: AIArtView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
