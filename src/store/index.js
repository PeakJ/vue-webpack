import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: 0,
      name: 'bryce'
    },
    mutations: {
      increment (state) {
        state.count++
      },
      changeName (state,payload){
        Object.assign(state,payload)
      }
    },
    actions: {
      incrementAsync (context) {
        setTimeout(() => {
          context.commit('increment')
        }, 1000)
      },
      changeName ({commit},payload){
        setTimeout(() => {
          commit('changeName',payload)
        }, 1000)
      }
    }
  })
  export default store;