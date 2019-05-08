<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Información de ubicación</h2>
    <v-container fluid grid-list-md>
      <v-layout row wrap align-center>
        <div class="inner">
        <v-flex xs6>
          <v-date-picker v-model="fecha" label="Fecha" :reactive="reactive" ></v-date-picker>
        </v-flex>
          <v-select class="drop-down-conf" v-model="circulo" label="Seleccione el círculo a quien irá dirigida la información" :items="circles" ></v-select>
          <v-text-field label = "Dirección" v-model="name"></v-text-field>
          <v-textarea
          name="input-7-1"
          label="Información"
          hint="Planificación"
        ></v-textarea>
        
          <v-btn depressed dark class="orange font-weight-bold" v-on:click="creado()">Enviar</v-btn> <v-btn depressed dark class="grey font-weight-bold" v-on:click="cancelar()">Cancelar</v-btn>
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
                msg: 'Enviar planificación',
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
