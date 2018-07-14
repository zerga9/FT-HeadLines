var express = require('express');
var router = express.Router();

router.get('/search', (req, res) =>{
  res.render("../views/search.ejs")
})

module.exports = router;
