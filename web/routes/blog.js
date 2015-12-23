var express = require('express');
var router = express.Router();


router.get('/view', function(req, res, next) {
  res.render('blog/view', {title: ''});
});
router.get('/edit', function(req, res, next) {
  res.render('blog/edit', {title: ''});
});
router.get('/add', function(req, res, next) {
  res.render('blog/add', {title: ''});
});
router.get('/del', function(req, res, next) {
  res.render('blog/del', {title: ''});
});

module.exports = router;
