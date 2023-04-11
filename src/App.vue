<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
//import UserForm from './views/UserForm.vue'

export default { 
  name: 'homePage',
  components: {
    //UserForm
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
