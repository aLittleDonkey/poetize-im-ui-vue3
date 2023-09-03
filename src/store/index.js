import {createStore} from 'vuex'


export default createStore({
  state: {
    currentUser: JSON.parse(localStorage.getItem("currentUser") || '{}')
  },
  getters: {},
  mutations: {
    loadCurrentUser(state, user) {
      state.currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(user));
    }
  },
  actions: {},
  modules: {},
  plugins: []
})
