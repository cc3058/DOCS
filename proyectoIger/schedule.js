var express = require('express'); 
var app = express(); 

app.get('view engine', 'ejs'); 

app.get('/', function(req, rep){
	rep.sendFile(__dirname + '/about.html');
})

var schedule = {
	1 : 'Juan',
	2 : 'Maria',
	3 : 'Laura'
}  

app.get('/schedule /:id', function(req, rep){
	rep.render('schedule', {name : schedule[req.params.id]})
	rep.send('you have requested to see the student name: '+ students[req.params.id]);
})

app.listen(3000, function() {
	console.log('our server is live on port 3000');
})