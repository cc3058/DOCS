const LocalStrategy = require('passport-local').Strategy;
// Models
const User = require('../models/user');

module.exports = function(passport) {
   
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',    
        passwordField : 'password', 
        passReqToCallback : true 
    }, function(req, email, password, done) {
        
        // lookup a user with a matching 'email'
        User.findOne({email: email}).then(function(user) {
            
            if (!user) {
                
                return done(null, false);
            }
        
            // check password validity
            if (!user.validPassword(password)) {
                
                return done(null, false);
            }

            // otherwise, pass user object with no errors
            return done(null, user)    
        }).catch(function(err) {done(err, false)});
    }));

    
    passport.use('local-signup', new LocalStrategy({
      
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true 
    }, function(req, email, password, done) {

        // if the user is already logged in:
        if (req.user) {
            // just pass back his data
            return done(null, req.user);
        }
        
        User.findOne({email : email}).then(function(user) {
            if (user) {
                
                return done(null, false);
            }
            new User({
                email: email,
                password: User.generateHash(password),
                nickname: req.body.nickname,
                age: req.body.age,
                role: req.body.role
            }).save(function(err, savedUser) {
                if (err) {
                    return done(err, false)
                }
                return done(null, savedUser);
            })
        }).catch(function(err) {done(err, false)});
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};

