<template>
  <v-responsive>
    <v-container>
      <h1>{{ msg }}</h1>
      <h2>Información de ubicación</h2>
      <b-container fluid>
        <b-row>
          <b-col sm><v-text-field v-model="dept" label="Departamento"></v-text-field></b-col>
          <b-col sm><v-text-field v-model="municipio" label="Municipio"></v-text-field></b-col>
          <b-col sm><v-text-field label = "Número de círculo" v-model="number"></v-text-field></b-col>
        </b-row>
        <b-row>
          <b-col sm><v-text-field label = "Dirección" v-model="direccion"></v-text-field></b-col>
        </b-row>
        <b-row>
          <b-col sm>
            <v-text-field label = "Coordinador" v-model="coordinador"></v-text-field>
          </b-col>
          <b-col sm>
            <v-text-field label = "Encargado" v-model="encargado"></v-text-field>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm>
            <v-textarea label = "Orientador (si es más de uno, separarlos por comas)" v-model="orientador"></v-textarea>
          </b-col>
        </b-row>
        <b-row align-h="center">
          <b-col sm>
            <v-btn depressed dark class="orange font-weight-bold" v-on:click="creado()">Crear círculo</v-btn>
          </b-col>
          <b-col sm>
              <v-btn depressed dark class="grey font-weight-bold" v-on:click="cancelar()">Cancelar</v-btn>
          </b-col>
        </b-row>
      </b-container>
    </v-container>
  </v-responsive>
</template>


<script>
import router from '../router'
import Api from '@/services/Api'

    export default {
        name: 'UserType',
        data () {
            return {
                msg: 'Crear Circulo',
                direccion: '',
                dept: '',
                municipio: '',
                number: '',
                coordinador: '',
                encargado: '',
                orientador: ''
            }
        },
        methods: {
            creado() {
                const post = Api().post

                const data = {
                    departamento: this.dept,
                    municipio: this.municipio,
                    circulo: this.number,
                    coordinador: this.coordinador,
                    encargado: this.encargado,
                    orientador: this.orientador.split(',')
                }

                post(
                    'circulos/add',
                    data
                ).catch( error => {
                    console.log(error)
                    return null
                }).then(response => {
                    router.push({ name: "AdminHome" })
                })
            },
            cancelar() {
                router.push({ name: "AdminHome" });
            }
          },
          computed: {
            binding () {
              const binding = {}

              if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

              return binding
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
</style>
