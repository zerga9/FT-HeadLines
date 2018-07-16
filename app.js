require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./controllers/index');
const search = require('./controllers/search');
const favicon = require('serve-favicon')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, '', 'favicon.ico')));

app.use('/', index);
app.use(search);




module.exports = app;
