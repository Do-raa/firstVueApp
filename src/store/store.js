import Vue from 'vue'
import Vuex from 'vuex'  
import axios from 'axios'
import VueAxios from 'vue-axios' 

Vue.use(Vuex) 
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: { 
    name: '', 
    email: '', 
    isMale: false, 
    isFemale: false,
    users: [],
  },
  mutations: { 
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
    setUsers(state, users) {
      state.users = users
    }, 
    deleteUser(state, id) {
      const index = state.users.findIndex(user => user.id === id)
      if (index !== -1) state.users.splice(index, 1)
    }, 
    addUser(state, user) {
      state.users.push(user)
    }, 
    updateUser(state, newUser) {
      state.users.map(user => user.id === newUser.id? user = newUser : user)
    }
  },
  actions: {  
    async createUser({ commit }, user) { 
      const accessToken = '7b818a774d5d19fd0e06afe908ebec814926a562b1ee86ea201d6655aebdf55f'
       await axios.post('https://gorest.co.in/public/v2/users', user, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}` 
        }
      }) 
      .then((response) => commit('addUser', response.data))
      .catch(error => console.log(error))
    },

    async fetchUsers({ commit }) {
      try { 
        const accessToken = '7b818a774d5d19fd0e06afe908ebec814926a562b1ee86ea201d6655aebdf55f' 
        const response = await axios.get('https://gorest.co.in/public/v2/users', {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}` 
          }
        }); 
        commit('setUsers', response.data);
      } catch (error) {
        console.log(error);
      }
    }, 

    async deleteUser({commit}, id) { 
      const accessToken = '7b818a774d5d19fd0e06afe908ebec814926a562b1ee86ea201d6655aebdf55f' 
      await axios.delete(`https://gorest.co.in/public/v2/users/${id}`, {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}` 
              }
          })
      .then(() => commit('deleteUser', id))
      .catch(error => console.log(error) 
    )},

    async updateUser({commit}, user) {
      const accessToken = '7b818a774d5d19fd0e06afe908ebec814926a562b1ee86ea201d6655aebdf55f' 
      await axios.put(`https://gorest.co.in/public/v2/users/${user.id}`, user, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}` 
        }
    }) 
      .then((response) =>{commit('updateUser', response.data)} )
      .catch(error => console.log(error))
    }
  },
  getters: { 
    userToEdit:(state) => (id) => {
      return state.users.filter(user => user.id == id )
    }
  },
})
