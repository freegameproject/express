var express = require('express');
var router = express.Router();


router.get('/dollar', function(req, res, next) {
  res.render('game/dollar', {title: '数美元'});
});

module.exports = router;
