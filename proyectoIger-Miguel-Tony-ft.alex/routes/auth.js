const router = require('express').Router()
const passport = require('passport');


router.get('/signup', function(req, res) {
	res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
	failureRedirect : '/auth/signup',
	failureFlash : false // allow flash messages
}), function(req, res, next)  {
	res.redirect('/')
});


router.get('/login', function(req, res, next)  {
	if (req.user) {
		res.redirect('/')
	} else {
		res.render('login')
	}
})

router.post('/login', passport.authenticate('local-login', {
	failureRedirect : '/auth/login',
	failureFlash : false 
}), function(req, res, next)  {
	res.redirect('/')
});



router.get('/logout', function(req, res, next) {
	req.logout();
	res.redirect('/auth/login');
});

router.get('/reunion', function(req, res) {
	res.render('reunion');
});

router.post('/reunion', function(req, res) {
	const postBody = req.body;
	console.log(postBody);
});


module.exports = router;
