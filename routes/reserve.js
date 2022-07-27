var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reserve', function(req, res, next) {
  res.render('reserve');
  console.log('this function');
});

module.exports = router;
