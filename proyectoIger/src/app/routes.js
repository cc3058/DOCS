module.exports = (app, passport) => {

    //index route
    app.get('/', (req, res) => {
        res.render('index.ejs', {
			message: req.flash('loginMessage')
		});
    });

    app.post('/', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/',
		failureFlash: true
    }));
    
    // signup view
	app.get('/signup', (req, res) => {
		res.render('signup', {
			message: req.flash('signupMessage')
		});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true // allow flash messages
    }));
    
    //profile view
	app.get('/profile', (req, res) => {
		res.render('profile', {
			user: req.user
		});
	});
};

