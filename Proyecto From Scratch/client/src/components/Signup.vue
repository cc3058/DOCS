<template>
<div>
<h1>Signup</h1>

<input v-model = "email" type = "email" name = "email" placeholder = "email"/>
<br>
<input v-model = "password" type = "password" name = "password" placeholder = "password"/>
<br>
<input v-model = "type" type = "text" name = "type" placeholder = "tipo de usuario"/>
<br>
<div class = "error" v-html ="error">

</div>

<button @click = "signup"> Signup </button>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      type: '',
      error: null
    }
  },
  methods: {
    async signup () {
      try {
        await AuthenticationService.signup({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
