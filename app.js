require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./controllers/index');
var search = require('./controllers/search');
var favicon = require('serve-favicon')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, '', 'favicon.ico')));

app.use('/', index);
app.use(search);

app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
