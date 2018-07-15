var express = require('express');
var request = require('request-promise');
var router = express.Router();

const FT_API_KEY = process.env.FT_API_KEY;
const apiUrl = "http://api.ft.com/content/search/v1?apiKey=" + FT_API_KEY;

const allArticles = {
  url: apiUrl,
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: {
    "queryString" : "",
    "queryContext" : {
      "curations" : [ "ARTICLES"]
    },
    "resultContext" : {
  		 "aspects" :[ "title","lifecycle","location","summary","editorial"],

  	}
  },
  json: true
};

router.get('/', (req, res) =>{
  request(allArticles)
  .then(function (response) {
    let articles = response.results[0].results;

    res.render('index', { title: 'FT HeadLines',
    articles : articles
    });
  });

});

module.exports = router;
