<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view/>
    </div>
</template>


<script>
    export default {
        name: 'UserType',
        data () {
            return {
                msg: 'Vista Estudiante'
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
