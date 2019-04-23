import Vue from 'vue'
import Router from 'vue-router'
import LogIn from './components/LogIn'
import Register from './components/Register'
import App from './App.vue'

Vue.use(Router)

//Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


