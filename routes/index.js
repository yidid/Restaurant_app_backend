var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/users', function(req, res, next) {
  res.render('users');
  console.log('abc');
});

router.get('/add', function(req, res, next) {
  res.render('addmenu');
  console.log('add')
});
router.get('/reserve', function(req, res, next) {
  res.render('reserve');
  console.log('add')
});

router.get('/orders', function(req, res, next) {
  res.render('orders');
  console.log('add')
});
module.exports = router;
