<template>
    <div class="all"> 
        <h2>ADD USER</h2>
        <form @submit="onSubmit"> 
            <div class="mb-6">
                <label for="exampleInputName1" class="form-label">Name :</label>
                <input type="text" class="form-control" id="exampleInputName1" v-model="name" placeholder="Please enter your name">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address :</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" placeholder="Please enter your email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            
            <div class="mb-3 form-check">
                <input id="checkbox" type="checkbox"  v-model="isMale">
                <label class="form-check-label" for="exampleCheck1">Male</label>
            </div>
            <div class="mb-3 form-check">
                <input id="checkbox" type="checkbox" v-model="isFemale">
                <label class="form-check-label" for="exampleCheck1">Female</label>
            </div>
            <button type="submit">Submit</button>
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
            const user = {id: Math.floor(Math.random() * 100), name: this.name, email: this.email, gender: gender, status: "active"}

            if(this.name === "" || this.email === "" || (this.isFemale === false && this.isMale === false) ) return alert('All fields are required !')
    
            this.$store.dispatch('createUser', user)
            router.push({path: '/users'})
            
            this.name = "";
            this.email = "";
            this.isFemale = false;
            this.isMale = false;
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

<style scoped> 
.all {
    text-align: center;
}
h2 {
    margin-top: 80px;
    margin-bottom: 50px; 
    color : #D14D72; 
    font-weight: bold; 
    text-align: center;
} 

.form-control {
    max-width: 500px;
    border: 2px solid black;
    box-shadow: 2px 2px #454545;
    margin-inline:33%;
}

label {
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
}

#checkbox {
    margin-right: 5px; 
}

button {
    background-color: #19A7CE;
    overflow: none; 
    margin-inline:48.5%; 
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
    border: none; 
    border-radius: 5px; 
    padding: 10px;
} 

button:hover {
    opacity: 0.5;
}
</style>
