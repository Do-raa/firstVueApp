<template>
    <div>
        <h2>Users List</h2> 
        <div class="container">
            <ul v-for="user in users" :key="user.id">
                <div class="content">
                    <li>{{ user.name }}</li> 
                    <p>{{ user.email }}</p> 
                </div>
                <div class="trash">
                    <p>X</p>
                </div>
            </ul>
        </div>
    </div>
</template> 


<script>
export default {
    //name: 'UsersList', 
    computed: {
        users() {
            return this.$store.state.users
        }
    }, 
    mounted() {
        this.users
    }
}
</script> 

<style scoped>
.container {
 
    border: 2px solid black; 
    box-shadow: 2px 2px gray; 
} 

.trash {
   
    right: 0;
    color: red;
}
</style>