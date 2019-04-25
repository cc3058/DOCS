<template>
    <div class="hello">
    <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <v-container fluid grid-list-xl>
          <v-layout wrap align-center>
            <div class="inner">
            <br>
            <v-text-field label = "Email" v-model="email"></v-text-field>
            <v-text-field label = "Contraseña" v-model="password" type="password"></v-text-field>
            <v-text-field label = "Nombre" v-model="name"></v-text-field>
            <br>
            <v-select class="drop-down-conf" v-model="type" label="Tipo de usuario" :items="items" ></v-select>
            <br>
            <v-btn depressed dark class="orange font-weight-bold" v-on:click="ingreso()">Registrarme</v-btn>
            <br>
            </div>
          </v-layout>
        </v-container>
        <br>
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Regresar</a>
    </div>
</template>

<script>
    import router from '../router'
    import AuthenticationService from '@/services/AuthenticationService'

    export default {
        name: 'Register',
        data () {
            return {
                msg: 'Registrar nueva cuenta',
                email: '',
                password: '',
                type: '',
                items:['Administrador','Estudiante','Encargado de círculo/Maestro']
            }
        },
        methods: {
            navigate() {

                router.push({ name: "LogIn" });
            },
            ingreso() {
                /*try {
                AuthenticationService.signup({
                email: "preuba@gmail.com",
                password: "12345",
                name: "juanito",
                type: "Estudiante"
                })
                } catch (error) {
                    this.error = error.response.data.error
                }*/
                router.push({name: "HomePage"});
                //estos son los datos pero idk como mandarlos a express
                //this.email;
                //this.password;
                //this.type;
                //this.name;
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

    .drop-down-conf {
    margin-top: 0px;
    }
</style>
