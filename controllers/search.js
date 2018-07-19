const express = require('express');
const request = require('request-promise');
const router = express.Router();

const apiActions = require('../api/index');

router.get('/search', (req,res) => {
  request(apiActions.fetchSearch(req))
  .then(response => {
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
