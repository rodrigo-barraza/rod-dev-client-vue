
import lodash from 'lodash';
import { createRouter, createWebHistory } from 'vue-router'
import ArtCollectionsCollection from '@/collections/ArtCollectionsCollection';
import ViewsCollection from '@/collections/ViewsCollection';
import SEOConstants from '@/constants/SEOConstants';
import HomeView from '../views/HomeView.vue'
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
    let documentKeywords = '';
    const ldJsonScript = document.querySelector('script[type="application/ld+json"]');
    if (ldJsonScript) {
      ldJsonScript.remove();
    }
    if (to.name === 'collection') {
        const currentCollectionParam = to.params.collection;
        const currentCollection = lodash.find(ArtCollectionsCollection, {path: currentCollectionParam});
        const moreCollections = lodash.reject(lodash.shuffle(ArtCollectionsCollection), { name: currentCollection.tittle }).slice(0, 3);
        to.meta.currentCollection = currentCollection;
        to.meta.moreCollections = moreCollections;
        documentTitle = `Rodrigo Barraza - ${to.meta.title} - ${currentCollection.title}`;
        documentDescription = currentCollection.documentDescription;
        documentKeywords = currentCollection.documentKeywords;
        if (currentCollection.documentKeywords) {
          documentTitle = currentCollection.documentTitle;
        }
    } else if (to.name === 'home' || to.name === 'about') {
      const view = lodash.find(ViewsCollection, {'name': to.name});
      documentTitle = view.documentTitle;
      documentDescription = view.documentDescription;
      documentKeywords = view.documentKeywords;
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
