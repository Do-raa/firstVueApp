<template>
    <div> 
        <form @submit="onSubmit"> 
            <div class="mb-3">
                <label for="exampleInputName1" class="form-label">Name </label>
                <input type="text" class="form-control" id="exampleInputName1" v-model="name">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="isMale">
                <label class="form-check-label" for="exampleCheck1">Male</label>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="isFemale">
                <label class="form-check-label" for="exampleCheck1">Female</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template> 

<script> 

import Vue from 'vue' 
import axios from 'axios'
import VueAxios from 'vue-axios' 
import router from '../router'

Vue.use(VueAxios, axios)

export default { 
    name: 'UserForm', 
    data() {
        return {
            inputName : '', 
            inputEmail : false, 
        }
    }, 
    methods: {
        onSubmit(e) { 
            e.preventDefault() 
            const gender = this.isMale? 'male': 'female'  
    
            if(this.name === "" || this.email === "" || (this.isFemale === false && this.isMale === false) ) return alert('All fields are required !')
            
            Vue.axios.get('https://gorest.co.in/public/v2/users').then((response) => {
                const foundUser = response.data.find(user =>{
                    console.log(user)
                    if(user.name === this.name && user.email === this.email && user.gender === gender) return user
                }) 
           
            if(foundUser !== undefined) {
                this.$store.commit('setUsers', foundUser);
                router.push({path: '/users'}) 
            }else{
                alert('This user is not found !')
            }
            })

        }
    },
    computed: { 
        name: {
            get() {
                return this.$store.state.name 
            }, 
            set( value ) {
                return this.$store.commit('setName', value)
            }
        },
        email: {
            get() {
                return this.$store.state.email 
            }, 
            set( value ) {
                return this.$store.commit('setEmail', value)
            }
        },
        isFemale: {
            get() {
                return this.$store.state.isFemale
            }, 
            set( value ) {
                return this.$store.commit('isFemale', value)
            }
        }, 
        isMale: {
            get() {
                return this.$store.state.isMale
            }, 
            set( value ) {
                return this.$store.commit('isMale', value)
            }
        }, 
        users: { 
            get() {
                return this.$store.state.users
            }, 
            set( user ) {
                return this.$store.commit('setUsers', user)
            }
        }
    }
}
</script>
