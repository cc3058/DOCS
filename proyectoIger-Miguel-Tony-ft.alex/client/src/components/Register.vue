<template>
    <div class="hello">
    <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <v-container fluid grid-list-xl>
          <v-layout wrap align-center>
            <div class="inner">
            <br>
            <v-text-field type="text" id="email" label = "Email" v-model="email"></v-text-field>
            <span align="left" v-if="!email" style="color:#FF0000;"> *Necesario</span>
            <p align="left"> *formato correcto: ejemplo@gmail.com </p>

            <v-text-field label = "Contraseña" v-model="password" type="password"></v-text-field>
            <span v-if="!password" style="color:#FF0000;"> *Necesario</span>

            <v-text-field label = "Nombre" v-model="first_name"></v-text-field>
            <v-text-field label = "Apellido" v-model="last_name"></v-text-field>
            <br>
            <v-select class="drop-down-conf" v-model="role" label="Tipo de usuario" :items="items" ></v-select>
            <br>
            <v-btn depressed dark class="orange font-weight-bold" v-on:click="register()">Registrarme</v-btn>
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
                first_name: '',
                last_name: '',
                role: '',
                items:['Administrador','Estudiante','Encargado de círculo/Maestro']
            }
        },
        methods: {
            navigate() {
                router.push({ name: "LogIn" });
            },
            async register() {
                try {
                const response = AuthenticationService.register({
                email: this.email,
                password: this.password,
                first_name: this.first_name,
                last_name: this.last_name,
                role: this.role
                })
                console.log(response.data)
                } catch (error) {
                    console.log(error.data)
                }

                //router.push({name: "StudentHome"});
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
