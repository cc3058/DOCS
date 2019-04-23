<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
  <div class = "inner">
    <div class = "white elevation-2">
      <v-toolbar flat dense class = "blue">
        <v-toolbar-title>Signup </v-toolbar-title>
      </v-toolbar>
      <div class = "pl-4 pr-4 pt-2 pb-2">
      <v-text-field label = "Email" v-model="email"></v-text-field>
      <br>
      <v-text-field label = "Contraseña" v-model = "password" type = "password"></v-text-field>
      <br>
      <v-text-field label = "Tipo de Usuario" v-model = "type"></v-text-field>
      <br>
      <div class = "error" v-html ="error"/>
      <br>
      <v-btn @click = "signup" class = "orange"> Signup </v-btn>

      </div>
      </div>
      </div>
  </v-flex>
</v-layout>

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

.inner {
  display: table;
  margin: 0 auto;
}

</style>
