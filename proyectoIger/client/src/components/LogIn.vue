<template>
    <div class="hello">
    <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <br>
        <v-flex xs6 offset-xs3>
          <div class="inner">
          <v-text-field label = "Email" v-model="email"></v-text-field>
          <br>
          <v-text-field label = "Contraseña" v-model="password" type="password"></v-text-field>
          <br>
          <v-btn depressed dark class="orange font-weight-bold" v-on:click="ingreso()" v-model="type" >Iniciar sesión</v-btn>
          </div>
        </v-flex>
        <br>
        <p>¿No tienes cuenta? <router-link to="/register">Registrarse</router-link></p>
    </div>
</template>

<script>
import router from '../router'

    export default {
        name: 'LogIn',
        data () {
            return {
                msg: 'Inicia sesión',
                email: '',
                password: ''
            }
        },
        methods: {
        ingreso() {
          router.push({name: "HomePage"});
          //estas son las variables que hay que pasar
          //this.email;
          //this.password;
        }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
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

    .inner {
      display: table;
      margin: 0 auto;
    }
</style>
