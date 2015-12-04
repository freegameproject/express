var express = require('express');
var fs = require('fs');
var path=require('path');
var router = express.Router();
MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
mongoUrl = 'mongodb://localhost:27017/web';
//var crypto = require('crypto');
//var md5=crypto.createHash('md5');
var md5 = require('md5');

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

    MongoClient.connect(mongoUrl, function (err, db) {
        assert.equal(null, err);
        db.collection('blogs').insertOne({
            title: title,
            text: text
        }, function (err, result) {
            assert.equal(err, null);
            res.json(result);
            db.close();
        });
    });
});

router.post('/uploadimg', function (req, res, next) {
    //

    var formidable = require("formidable");
    var form = new formidable.IncomingForm();   //创建上传表单
    form.parse(req, function(err, fields, files) {
        var imgs=[];
        for(var key in files){


            var file = files[key];


            //var fName = (new Date()).getTime();
            var fName=md5(fs.readFileSync(file.path));

            switch (file.type){
                case "image/jpeg":
                    fName = fName + ".jpg";
                    break;
                case "image/png":
                    fName = fName + ".png";
                    break;
                default :
                    fName =fName + ".png";
                    break;
            }
            //console.log("SIZE:"+file.size);

            //var uploadDir=path.resolve('public', 'upload')+fName;

            //console.log(uploadDir);
            var uploadDir = path.resolve('public','upload',fName);

            imgs.push(fName);

            fs.rename(file.path, uploadDir, function(err) {
                if (err) {

                }else{

                }
            });
            //fs.renameSync(files.upload.path,"public/upload/"+ fName);
        }
        res.json(imgs);
    });
    /*
    form.encoding = 'utf-8';		//设置编辑
    form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;	 //设置上传目录
    form.keepExtensions = true;	 //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
    form.parse(req, function (error, fields, files) {
        var types = files.upload.name.split('.');
        var date = new Date();
        var ms = Date.parse(date);
        fs.renameSync(files.upload.path, "/tmp/files" + ms + "." + String(types[types.length - 1]));
    });
    */
    //
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



