<template>
  <v-container>
    <h1>{{ msg }}</h1>
        <v-btn round depressed dark class="orange font-weight-bold text-xs-left" v-on:click="nuevocirculo()">Crear círculo</v-btn>
        <br>
        <v-btn round depressed dark class="orange font-weight-bold text-xs-left" v-on:click="asignar()">Asignar miembros a círculo</v-btn>
        <br>
        <v-btn round depressed dark class="grey font-weight-bold text-xs-left" v-on:click="salir()">Salir</v-btn>
  </v-container>
</template>


<script>
import router from '../router'

    export default {
        name: 'UserType',
        data () {
            return {
                msg: 'Inicio'
            }
        },
        methods: {
        nuevocirculo() {
          router.push({name: 'Circle'});
          },
        asignar(){
          router.push({name: 'Agregar'})
          },
          salir(){
            router.push({name: 'LogIn'})
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
