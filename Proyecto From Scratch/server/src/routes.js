const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
module.exports = (app) => {
  app.post('/signup',
    AuthenticationControllerPolicy.signup,
    AuthenticationController.signup
    )
}
