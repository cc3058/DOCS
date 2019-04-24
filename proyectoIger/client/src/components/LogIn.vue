<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link to="/register">Navigate to Register</router-link>
    </div>
</template>

<script>
    export default {
        name: 'LogIn',
        data () {
            return {
                msg: 'LogIn marik'
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