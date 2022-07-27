var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/orders', function(req, res, next) {
  res.render('orders');
  console.log('this function');
});

module.exports = router;
