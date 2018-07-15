var express = require('express');
var request = require('request-promise');
var router = express.Router();

const FT_API_KEY = process.env.FT_API_KEY;
const apiUrl = "http://api.ft.com/content/search/v1?apiKey=" + FT_API_KEY;

router.get('/search', (req,res) => {

  const getSearch = {
    url: apiUrl,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
      "queryString" : req.query.search,
      "queryContext" : {
        "curations" : [ "ARTICLES"]
      },
      "resultContext" : {
    		 "aspects" :[ "title","lifecycle","location","summary","editorial" ]
    	}
    },
    json: true
  };

  request(getSearch)
  .then(function (response) {
    let articles = response.results[0].results;

    res.render('search',
     { title: 'FT HeadLines',
      articles : articles} );
  })
});


module.exports = router;
