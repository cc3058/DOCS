<template>
  <div class="hello">
        <h1>{{ msg }}</h1>
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Navigate to LogIn</a>
    </div>
</template>

<script>
  import router from '../main.js'
  export default {
    name: 'Register',
    props: {
      msg: 'nigga u kidding'
    },
    methods: {
      navigate(){
        router.push({ name: "LogIn"});
      }
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
