var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainController = require('./controllers/mainController.js');

var app = express();

app.use(bodyParser.json());

app.use(middleware.addHeaders);  //do this once, and use it for all get requests

app.get('/name', mainController.getName);

app.get('/location', mainController.getLocation);

app.get('/occupations', mainController.getOccupations);

app.get('/occupations/:order', mainController.getOccupationsOrder);

app.get('/occupations/latest', mainController.getLatestOccupations);

app.get('/hobbies', mainController.getHobbies);

app.get('/hobbies/:type', mainController.getHobbiesType);



app.put('/name/:name', mainController.updateName);

app.put('/location/:location', mainController.updateLocation);



app.post('/hobbies', mainController.buildHobbies);

app.post('/occupations', mainController.buildOccupations);



app.listen('10000', function() {
	console.log('cruising altitude 10000 meters');
})


