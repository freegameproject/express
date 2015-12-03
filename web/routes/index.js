var express = require('express');
var router = express.Router();
MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
mongoUrl = 'mongodb://localhost:27017/web';

/* GET home page. */
router.get('/', function (req, res, next) {
    MongoClient.connect(mongoUrl, function (err, db) {
        assert.equal(null, err);
        findRestaurants(db, function (doc) {
            res.render('index', {title: '哔哔嘻工作室', doc: doc});
            db.close();
        });
    });
});
/* GET blog page. */
router.get('/blog/:id', function (req, res, next) {
    var id = req.params.id;
    MongoClient.connect(mongoUrl, function (err, db) {
        assert.equal(null, err);
        findDocById(db, id, function (doc) {
            res.render('blog', {title: doc[0].title, doc: doc[0]});
            db.close();
        });
    });
});


router.get('/case', function (req, res, next) {
    res.render('case', {title: '哔哔嘻工作室－案例'});
});
router.get('/about', function (req, res, next) {
    res.render('about', {title: '关于哔哔嘻工作室'});
});
router.get('/admin', function (req, res, next) {
    res.render('admin', {title: 'admin'});
});

router.get('/admin/add_blog', function (req, res, next) {
    res.render('admin_add_blog', {title: 'admin'});
});

router.get('/login', function (req, res, next) {
    res.render('login', {title: 'login'});
});


router.post('/add_blog', function (req, res, next) {
    var title = req.body.title;
    var text = req.body.text;

    MongoClient.connect(mongoUrl, function(err, db) {
        assert.equal(null, err);
        db.collection('blogs').insertOne( {
            title:title,
            text:text
        }, function(err, result) {
            assert.equal(err, null);
            res.json(result);
            db.close();
        });
    });
});


var findRestaurants = function (db, callback) {
    db.collection('blogs').find({}).toArray(function (err, arr) {
        callback(arr);
        console.dir(arr);
    });
};

var findDocById = function (db, id, callback) {
    db.collection('blogs').find({'_id': ObjectId(id)}).toArray(function (err, arr) {
        callback(arr);
        console.dir(arr);
    });
};

module.exports = router;
