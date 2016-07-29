var express = require('express');
var path = require('path');
var sentence = require('./controllers/sentence');

var app = express();
var port = Number(process.env.port || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(port);

app.get('/reverse/:sentence', sentence.reverse);
app.get('/toupper/:sentence', sentence.toUpper);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
