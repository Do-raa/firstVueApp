import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    name: '', 
    email: '', 
    isMale: false, 
    isFemale: false,
    users: [],
  },
  getters: { 
  },
  mutations: { //to perform methods on the state 
    setName(state, value) {
        state.name = value
    }, 
    setEmail(state, value) {
      state.email = value
    }, 
    isFemale(state, value) {
      state.isFemale = value
    }, 
    isMale(state, value) {
      state.isMale = value
    }, 
    setUsers(state, user) {
      state.users.push(user)
    }
  },
  actions: { 

  },
  modules: {
  }
})
