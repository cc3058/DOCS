<template>
  <div class="buttons">
  <h1>Log In</h1>
    <ul>
     <li><button class="button button-ya">yaaaa</button></li>
    </ul>
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

.button-ya {
  background-color: green;
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
