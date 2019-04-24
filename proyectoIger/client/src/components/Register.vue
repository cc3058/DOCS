<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Navigate to Page1</a>
    </div>
</template>

<script>
    import router from '../router'
    import AuthenticationService from '@/services/AuthenticationService'

    export default {
        name: 'Register',
        data () {
            return {
                msg: 'Hey registrate'
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
</style>