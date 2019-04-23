import Api from '@/services/Api'

export default {
  signup (credentials) {
    return Api().post('signup', credentials)
  }
}

// AutenticationService.register({
//  email: 'testing@gmail.com',
//  password:'123'
// })
