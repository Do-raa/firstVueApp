<template>
    <div class="all"> 
        <h2>EDIT USER</h2>
        <form @submit="onSubmit"> 
            <div class="mb-6">
                <label for="exampleInputName1" class="form-label">Name :</label>
                <input type="text" class="form-control" id="exampleInputName1" v-model="user.name" placeholder="Please enter your name">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address :</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user.email" placeholder="Please enter your email">
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
            <button type="submit">Update</button>
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
            user: {
                id: '',
                name: '',
                email: '',
                gender: '', 
                status: ''
            }
        }
    }, 
    methods: {
        onSubmit(e) { 
            e.preventDefault() 
            const gender = this.isMale? 'male': 'female'  
            const user = {id: this.user.id, name: this.user.name, email: this.user.email, gender: gender, status: this.user.status}

            if(this.name === "" || this.email === "" || (this.isFemale === false && this.isMale === false) ) return alert('All fields are required !')
    
            this.$store.dispatch('updateUser', user)
            router.push({path: '/'})
            
        }, 
    },
    computed: { 
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
    }, 
    beforeMount() { 
        const userId = this.$route.params.id
        this.user = this.$store.getters.userToEdit(userId)[0]
    },
    // mounted() { 
    //     const userId = this.$route.params.id
    //     this.user = this.$store.getters.userToEdit(userId)[0]
    // }, 
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