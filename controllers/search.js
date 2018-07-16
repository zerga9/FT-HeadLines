var express = require('express');
var request = require('request-promise');
var router = express.Router();

var apiActions = require('../api/index');

router.get('/search', (req,res) => {
  request(apiActions.fetchSearch(req))
    .then(function(response) {
      let articles = response.results[0].results;
      if (articles === undefined){
        res.render('error')
      } else{

      res.render('index', {
        title: 'FT HeadLines',
        articles: articles,
      });
    }
  })
});

module.exports = router;
