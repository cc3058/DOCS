import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import LogIn from '@/components/LogIn.vue'
import Register from '@/components/Register.vue'
import Main from '@/components/Main.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'LogIn',
            component: LogIn
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})
