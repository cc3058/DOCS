const express = require('express');
const app = express();

//settings
//the aplication will have a port if it is predifined it will
//start in that port if it doesnt exist it will star at port 3000

app.set('port', process.env.PORT||3000);

//middlewares

//routes

//static files


app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
});