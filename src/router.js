import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import JavaMinecraft from './pages/java/Minecraft.vue'
import JavaLibrary from './pages/java/Library.vue'
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
      component: About,
    },
    {
      path: '/java/minecraft',
      name: 'Minecraft Plugins',
      component: JavaMinecraft,
    },
    {
      path: '/java/library',
      name: 'Libraries for Java',
      component: JavaLibrary,
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
