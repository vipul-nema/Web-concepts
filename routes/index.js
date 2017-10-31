var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/jsonp', function(req, res, next) {
  res.render('jsonp', { title: 'Jsonp example' });
});

module.exports = router;
