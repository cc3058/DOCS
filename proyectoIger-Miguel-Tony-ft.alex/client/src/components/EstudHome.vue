<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <v-btn depressed dark class="orange font-weight-bold">Ver datos</v-btn>
    <br>
    <v-btn depressed dark class="grey font-weight-bold" v-on:click="salir()">Salir</v-btn>
    </div>
</template>


<script>
import router from '../router'
    export default {
        name: 'UserType',
        data () {
            return {
                msg: 'Este es mi homepage estudiante'
            }
        },
        methods: {
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
