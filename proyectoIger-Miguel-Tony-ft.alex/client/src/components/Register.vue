<template>
    <div class="hello">
    <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <v-container fluid grid-list-xl>
          <v-layout wrap align-center>
            <div class="inner">
            <br>
            <v-text-field label = "Email" v-model="email"></v-text-field>
            <span style="color:#FF0000" v-if="!email"> *Necesario,  </span>
            <span style="color:#FF0000" v-if="email"> ,*Formato Incorrecto, </span>
            <input type="text" id="email" placeholder="prueba@gmail.com" class="form-control" v-model="email" @blur="correct">

            <v-text-field label = "Contraseña" v-model="password" type="password"></v-text-field>
            <span style="color:#FF0000" v-if="!password"> *Necesario</span>

            <v-text-field label = "Nombre" v-model="name"></v-text-field>
            <span style="color:#FF0000" v-if="!name"> *Necesario</span>
            <input type="name" id="name" class="form-control" v-model="name">

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
                name: '',
                items:['Administrador','Estudiante','Encargado de círculo/Maestro']
            }
        },


        methods: {
            correct: function(){
                var texto = $("#email").val();
                var at = texto.indexOf('@');
                var point = texto.indexOf('.');
                if (at == -1 || point == -1){
                    this.email = true;
                }else{
                    this.email = false;
                }
            },

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
                router.push({name: "StudentHome"});
                //estos son los datos pero idk como mandarlos a express
                //this.email;
                //this.password;
                //this.type;
                //this.name;
            }
        }
    }
</script>

<script type="text/javascript">
function validar(campo)
{
   
        if(campo.name.value.length == 0)
        {
                campo.name.focus();   
                alert("llenar el nombre");
                return false;
        }
 if(campo.email.value.length == 0)
        {
                campo.email.focus();   
                alert("llenar el Emeil");
                return false;
        }
        
 if(campo.password.value.length == 0)
        {
                campo.password.focus();   
                alert("llenar el Sexo");
                return false;
        }        
        return true;
    
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
