const LocalStrategy = require('passport-local').Strategy;

const User = require('../app/models/user');

module.exports = function(passport){
    passport.serializeUser(function (user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done){
        User.findById(id, function(err, user){
            done(err, user); //callback
        });
    });

    // Signup
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        typeField: 'type',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, type, done) {
        User.findOne({'local.email': email}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, req.flash('signupMessage', 'the email is already taken'));
        } else {
            var newUser = new User();
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);
            newUser.local.type = type;
            newUser.save(function (err) {
            if (err) { throw err; }
            return done(null, newUser);
            });
        }
        });
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      function (req, email, password, done) {
        User.findOne({'local.email': email}, function (err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, req.flash('loginMessage', 'El usuario no existe'));
          }
          if (!user.validPassword(password)) {
            return done(null, false, req.flash('loginMessage', 'Contraseña incorrecta'));
          }
          return done(null, user);
        });
      }));
    
}