
import lodash from 'lodash';
import { createRouter, createWebHistory } from 'vue-router'
import ArtCollectionsCollection from '@/collections/ArtCollectionsCollection';
import SEOConstants from '@/constants/SEOConstants';
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
    path: '/collections',
    name: 'collections',
    component: HomeView,
    meta: {
      title: 'Collections'
    }
  },
  {
    path: '/collections/:collection',
    name: 'collection',
    component: CollectionView,
    meta: {
      title: 'Collections'
    }
  },
  {
    path: '/photography',
    name: 'photography',
    component: HomeView,
    meta: {
      title: 'Collections'
    }
  },
  {
    path: '/ai-art',
    name: 'ai-art',
    component: AIArtView,
    meta: {
      title: 'Collections'
    }
  },
  {
    path: '/rodrigo-barraza',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

router.beforeEach(to => {
    let documentTitle;
    let documentDescription;
    let documentKeywords = 'testing, testing2';
    if (to.name === 'collection') {
        const currentCollectionParam = to.params.collection;
        const currentCollection = lodash.find(ArtCollectionsCollection, {path: currentCollectionParam});
        const moreCollections = lodash.reject(lodash.shuffle(ArtCollectionsCollection), { name: currentCollection.name }).slice(0, 3);
        to.meta.currentCollection = currentCollection;
        to.meta.moreCollections = moreCollections;
        documentTitle = `Rodrigo Barraza - ${to.meta.title} - ${currentCollection.title}`;
        documentDescription = currentCollection.description;
        documentKeywords = currentCollection.keywords;
    } else if (to.meta.title) {
        documentTitle = `Rodrigo Barraza - ${to.meta.title}`;
        documentDescription = "Default description";
    } else {
        documentTitle = SEOConstants.defaultDocumentTitle;
        documentDescription = SEOConstants.defaultDocumentDescription;
    }
    document.title = documentTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", documentDescription);
    document.querySelector('meta[name="keywords"]').setAttribute("content", documentKeywords);
});

export default router
