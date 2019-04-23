<template>
  <div id="app">
    <img alt="IGER logo" src="./assets/logo_iger.png">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LogIn from './components/LogIn.vue'
import Register from './components/Register.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, LogIn, Register
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
