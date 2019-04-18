const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const { url } = require('./config/database');

mongoose.connect(url, {
    useNewUrlParser: true
})

//require('./config/passport')(passport);

//settings
//the aplication will have a port if it is predifined it will
//start in that port if it doesnt exist it will star at port 3000

app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//middlewares
app.use(morgan('dev'));
app.use(cookieParser()); //to use and administrate cookies
app.use(bodyParser.urlencoded({extended: false})); //to interpated images change to true
app.use(session({
    secret: 'iger',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//routes
require('./app/routes.js')(app, passport);

//static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
});