var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', function(_req, res, _next) {
  res.render('addmenu');
  console.log('add menu');
});

module.exports = router;
