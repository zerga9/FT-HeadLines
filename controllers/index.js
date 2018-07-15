var express = require('express');
var request = require('request-promise');
var router = express.Router();

var apiActions = require("../api/index");

router.get('/', (req,res) => {
  request(apiActions.fetchSearch())
    .then(response => {
      let articles = response.results[0].results;

      res.render('index', {
        title: 'FT HeadLines',
        articles: articles,
      });
    });
  });

module.exports = router;
