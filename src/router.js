import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Auth from './views/Auth/Auth.vue';
import Chat from './views/Chat';
import Dashboard from './views/Dashboard';
import Tests from './views/Test/Tests.vue';
import Test from './views/Test/Test';
import Main from './views/Main';
import Reg from './views/Auth/Reg';
import Posts from './views/Post/Posts';
import Post from './views/Post/Post';
import NewPost from './views/Post/NewPost';
import NewTest from './views/Test/NewTest';
import Inbox from './views/Inbox';

import {ifAuthenticated} from '@/services/middleware';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Auth
    },
    {
      path: '/registration',
      name: 'registration',
      component: Reg
    },
    {
      path: '/',
      name: 'main',
      beforeEnter: ifAuthenticated ,
      component: Main,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'chat',
          name: 'chat',
          component: Chat
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'tests',
          name: 'tests',
          component: Tests
        },
        {
          path: 'test/:id',
          name: 'test',
          component: Test
        },
        {
          path: 'posts',
          name: 'posts',
          component: Posts
        },
        {
          path: 'post/:id',
          name: 'post',
          component: Post
        },
        {
          path: 'newpost',
          name: 'newPost',
          component: NewPost
        },
        {
          path: 'newtest',
          name: 'newTest',
          component: NewTest
        },
        {
          path: 'inbox',
          name: 'inbox',
          component: Inbox
        }
      ]
    }
  ]
})

export default router;