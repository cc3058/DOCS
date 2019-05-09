<template>
  <v-container>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12>
        <h1>{{ msg }}</h1>
      </v-flex>
      <v-flex xs12>
        <router-view/>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
    export default {
        name: 'UserType',
        data () {
            return {
                msg: 'Vista Administrador'
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
