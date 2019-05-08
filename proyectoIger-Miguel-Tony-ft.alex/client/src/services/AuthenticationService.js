import Api from '@/services/Api'

export default {
  signup (credentials) {
    return Api().post('register', credentials)
  },

  login(credentials){
    console.log(credentials)
    return Api().post('login',credentials)
  }
}
