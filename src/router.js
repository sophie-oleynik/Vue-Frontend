import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Auth from './views/Auth.vue';
import Chat from './views/Chat';
import Dashboard from './views/Dashboard';
import Tests from './views/Tests.vue';
import About from './views/About';
import Test from './views/Test';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Auth
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/tests',
      name: 'tests',
      component: Tests
    },
    {
      path: '/test/:id',
      name: 'test',
      component: Test
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
