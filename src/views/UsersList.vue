<template>
    <div>
        <h2>USERS LIST</h2> 
        <button v-on:click="redirect">ADD USER</button>
        <div >
            <ul class="container" v-for="user in users" :key="user.id"> 
                <div class="content">
                    <li>{{ user.name }}</li> 
                    <p>{{ user.email }}</p> 
                </div> 
                <div id="edit-icon" @click="editUser(user.id)">
                    <i class="fas fa-edit"></i>
                </div>
                <div class="trash" @click="deleteUser(user.id)">
                    <p>X</p>
                </div>
            </ul>
        </div> 
    </div>
</template> 


<script> 
import router from '../router' 
import '@fortawesome/fontawesome-free/css/all.css'


export default {
    //name: 'UsersList', 
    computed: {
        users: { 
            get() {
                return this.$store.state.users
            }, 
            set( user ) {
                return this.$store.commit('setUser', user)
            }
        }
    }, 
    methods: {
        deleteUser(userId) { 
            alert('Are you sure you want to delete this user?')
            this.$store.dispatch("deleteUser", userId);
        }, 
        redirect() {
            router.push({path: '/addUser', replace: true})
        }, 
        editUser(id) {
            router.push({ path: `/edit/${id}` }) 
        }
    },
    created() { 
        this.$store.dispatch('fetchUsers');
    },
    mounted() { 
        this.$store.dispatch('fetchUsers');
    }
}
</script> 

<style scoped> 

h2 {
    margin-top: 80px;
    margin-bottom: 50px; 
    color : #D14D72; 
    font-weight: bold; 
    text-align: center;
} 

.content {
    margin-left: max(10px,15px);
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
} 

li {
    color :#009FBD; 
    font-weight: bold;
}
.container {
    display: flex; 
    flex-direction: row;
    border: 3px solid black; 
    box-shadow: 2px 2px gray; 
    border-radius: 5px; 
} 

.trash {
    position: absolute;
    right: 0;
    margin-right: min(120px, 200px);
    margin-top: 20px; 
    font-weight: bold;
    color: red;
}

.trash:hover {
    opacity: 0.5;
}

button { 
    margin-left: max(85vw);
    margin-bottom: 20px; 
    margin-right: 10px;
    border-radius: 5px;
    padding: 8px;
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
    font-weight: bold;
    background-color: #E4DCCF;
} 

button:hover {
    box-shadow: 2px 2px black; 
    opacity: 0.5;
} 

#edit-icon {
    position: absolute;
    right: 0;
    margin-right: min(150px, 200px);
    margin-top: 20px; 
    font-weight: bold; 
    color: #577D86;
} 

#edit-icon:hover {
    opacity: 0.5;
}
</style>