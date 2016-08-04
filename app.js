var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var reverse = require('./routes/reverse');
var list = require('./routes/list');

var app = express();

//Set up middleware
app.set('port', process.env.port || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//routes
app.post('/reverse/', reverse);
app.get('/list/', list);

//error handlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//launch application
app.listen(app.get('port'), function () {
  console.log('Express server listening on port', app.get('port'));
});

module.exports = app;
