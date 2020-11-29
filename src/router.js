import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue';

Vue.use(Router);

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
        path: '*',
        name: 'not-found',
        component: NotFound,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/About'),
    },
    {
      path: '/java/minecraft',
      name: 'Minecraft Plugins',
      component: () => import('./pages/java/Minecraft'),
    },
    {
      path: '/java/library',
      name: 'Libraries for Java',
      component: () => import('./pages/java/Library'),
    },
];

export default new Router({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 50)
    })
  }
});
