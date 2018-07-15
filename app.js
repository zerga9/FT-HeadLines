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




module.exports = app;
