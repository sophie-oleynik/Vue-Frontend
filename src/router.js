import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Auth from './views/Auth.vue';
import Chat from './views/Chat';
import Dashboard from './views/Dashboard';
import Tests from './views/Tests.vue';
import About from './views/About';
import Test from './views/Test';
import Main from './views/Main';
import Reg from './views/Reg';
import Posts from './views/Posts';
import Post from './views/Post';
import NewPost from './views/NewPost';
import NewTest from './views/NewTest';
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
        // {
        //   path: '',
        //   name: 'home',
        //   component: Home
        // },
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