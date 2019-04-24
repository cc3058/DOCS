import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/LogIn'
import Page2 from '@/components/Register'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "LogIn"
            }
        },
        {
            path: '/login',
            name: 'LogIn',
            component: Page1
        },
        {
            path: '/register',
            name: 'Register',
            component: Page2
        }
    ]
})