var express = require('express');
var router = express.Router();
MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
mongoUrl = 'mongodb://localhost:27017/web';

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(mongoUrl, function(err, db) {
    assert.equal(null, err);
    findRestaurants(db, function(doc) {
      res.render('index', { title: ' node ' ,doc:doc});
      db.close();
    });
  });
});


var findRestaurants = function(db, callback) {
  db.collection('blogs').find({}).toArray(function(err,arr){
    callback(arr);
    console.dir(arr);
  });
};

module.exports = router;
