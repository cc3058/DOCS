<template>
    <div class="hello">
    <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>

        <v-flex xs6 offset-xs3>
          <div class="inner">
          <v-text-field label = "Email" v-model="email"></v-text-field>
          <v-text-field label = "Contraseña" v-model="password" type="password"></v-text-field>
          <v-text-field label = "Nombre"></v-text-field>
          <v-text-field label = "Código de círculo" v-model="number"></v-text-field>
          <br>
          <v-select item-text="Tipo de usuario" :items="types"></v-select>
          <br>
          <v-btn>Registrar</v-btn>
          <br>
          </div>
        </v-flex>

        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Navigate to Page1</a>
    </div>
</template>

<script>
    import router from '../router'
    import AuthenticationService from '@/services/AuthenticationService'

    export default {
        name: 'AddUser',
        data () {
            return {
                msg: 'Registrar nueva usuario',
                types: ["Estudiante","Encargado/Maestro"]
            }
        },
        methods: {
            navigate() {
                try {
                AuthenticationService.signup({
                email: "preuba@gmail.com",
                password: "12345"
                })
                } catch (error) {
                    this.error = error.response.data.error
                }
                router.push({ name: "LogIn" });
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
