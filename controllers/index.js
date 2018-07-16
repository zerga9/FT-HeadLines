const express = require('express');
const request = require('request-promise');
const router = express.Router();

const apiActions = require('../api/index');

router.get('/', (req, res) => {

  request(apiActions.fetchSearch())
    .then(response => {
      let articles = response.results[0].results;

      res.render('index', {
        title: 'FT HeadLines',
        articles: articles,
      });
  })
});

module.exports = router;
