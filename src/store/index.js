import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: 0,
      name: 'bryce',
      todos: [
        { id: 1, text: 'text1', done: true },
        { id: 2, text: 'text2', done: false }
      ]
    },
    mutations: mutations,
    actions: actions,
    getters: getters
  })
  export default store;