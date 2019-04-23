<template>
  <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link to="/register">Navigate to Register</router-link>
    </div>
</template>

<script>
export default {
  name: 'LogIn',
  props: {
    msg: 'nigga dont know'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
  border: none;
  border-radius: 2px;
}

.button-login {
  background-color: green;
}
.button-register {
  background-color: orange;
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
