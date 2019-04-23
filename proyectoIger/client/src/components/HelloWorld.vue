<template>
  <div class="buttons">
  <img alt="IGER logo" src="./assets/logo_iger.png">
  <h1>Bachillerato Digital</h1>
    <ul>
     <li><button class="button button-login" v-on:click="goLogIn()">Log In</button></li>
    </ul>
    <ul>
     <li><button class="button button-register" v-on:click="goRegister()">Register</button></li>
    </ul>
  </div>
</template>

<script>

import router from '../router'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    goLogIn() {router.push({ name: "LogIn" });},
    goRegister() {router.push({ name: "Register" });}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
  border: none;
  border-radius: 5px;
  font-weight: bold;
}

.button-login {
  background-color: navy;
  color: white;
  font-size: 20px;
  width: 120px;
  height:50px;
}
.button-register {
  background-color: orange;
  color: white;
  font-size: 20px;
  width: 120px;
  height:50px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
