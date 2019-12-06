import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      meta: {
        keepAlive: false,
      },
      component: () => import('../views/Landing.vue'),
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        keepAlive: false,
      },
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/account',
      name: 'account',
      meta: {
        keepAlive: false,
      },
      component: () => import('../views/Account.vue'),
    },
    {
      path: '/gameboard',
      name: 'gameboard',
      meta: {
        keepAlive: false,
      },
      component: () => import('../views/Gameboard.vue'),
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      meta: {
        keepAlive: false,
      },
      component: () => import('../views/Lesson.vue'),
    },
    {
      path: '*',
      name: '404',
      meta: {
        keepAlive: false,
      },
      component: () => import('../views/NotFound.vue'),
    },
  ],
});
