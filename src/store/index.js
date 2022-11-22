import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";


export default createStore({
  state: {
    currentUser: {}
  },
  getters: {},
  mutations: {
    loadCurrentUser(state, user) {
      state.currentUser = user;
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.localStorage
    })
  ]
})
