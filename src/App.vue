<template>
  <div id="app">
   
    <router-view></router-view>
  </div>
</template>


<script>
//import UsersList from './views/UsersList.vue'

export default { 
  name: 'homePage',
  components: {
    //UsersList
  }

}
</script>

<style> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

</style>
