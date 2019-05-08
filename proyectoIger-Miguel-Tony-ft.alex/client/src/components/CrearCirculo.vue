<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Información de ubicación</h2>
    <v-container fluid grid-list-xl>
      <v-layout wrap align-center>
        <div class="inner">
          <v-select class="drop-down-conf" v-model="sector" label="Sector" :items="sectores" ></v-select>
          <v-select class="drop-down-conf" v-model="region" label="Región" :items="sectores" ></v-select>
          <v-text-field label = "Dirección" v-model="name"></v-text-field>
          <v-text-field label = "Código" v-model="number"></v-text-field>
          <v-btn depressed dark class="orange font-weight-bold" v-on:click="creado()">Crear círculo</v-btn> <v-btn depressed dark class="grey font-weight-bold" v-on:click="cancelar()">Cancelar</v-btn>
        </div>
      </v-layout>
    </v-container>
    </div>
</template>


<script>
import router from '../router'

    export default {
        name: 'UserType',
        data () {
            return {
                msg: 'Crear Circulo',
                name: '',
                sector: '',
                region: '',
                number: ''
            }
        },
        methods: {
            creado() {

                router.push({ name: "AdminHome" });
            },
            cancelar() {

                router.push({ name: "AdminHome" });
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
