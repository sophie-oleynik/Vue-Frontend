import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import test from './modules/test'
import post from './modules/post'
import schedule from './modules/schedule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    test,
    post,
    schedule,
  }
})
