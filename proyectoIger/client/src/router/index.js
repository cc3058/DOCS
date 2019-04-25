import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/LogIn'
import Page2 from '@/components/Register'
import Student from '@/components/Estudiante'
import Admin from '@/components/Admin'
import Teacher from '@/components/Encargado'

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
        },
        {
          path: '/student',
          name: 'HomePage',
          component: Student
        },
        {
          path: '/admin',
          name: 'HomePage2',
          component: Admin
        },
        {
          path: '/teacher',
          name: 'HomePage3',
          component: Teacher
        }
    ]
})
