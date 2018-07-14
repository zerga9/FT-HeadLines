var express = require('express');

var router = express.Router();

router.get('/', (req, res) =>{
  res.render("../views/index.ejs")
})

module.exports = router;
