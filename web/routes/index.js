var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
mongoUrl = 'mongodb://localhost:27017/web';
var md5 = require('md5');


/*
var session = require('express-session');
router.use(session({
    secret: 'wb',
    resave: true,
    cookie: {maxAge: 60000},
    saveUninitialized: true
}))
*/

router.get('/', function (req, res, next) {
    MongoClient.connect(mongoUrl, function (err, db) {
        assert.equal(null, err);
        findRestaurants(db, function (doc) {
            var admin = req.session.admin;
            if (admin === true) {
                res.render('index_admin', {title: '笔笔C', doc: doc});
            } else {
                res.render('index', {title: '笔笔C', doc: doc});
            }
            db.close();
        });
    });
});
router.get('/blog/:id', function (req, res, next) {
    var id = req.params.id;
    if (id.length === 24) {
        MongoClient.connect(mongoUrl, function (err, db) {
            assert.equal(null, err);
            db.collection('blogs').find({'_id': ObjectId(id)}).toArray(function (err, arr) {
                if (err) {
                    res.render('err', {err: err});
                } else {
                    if (arr.length > 0) {
                        var admin = req.session.admin;
                        if (admin === true) {
                            res.render('admin_blog', {title: arr[0].title, doc: arr[0]});
                        } else {
                            res.render('blog', {title: arr[0].title, doc: arr[0]});
                        }
                    } else {
                        res.render('404', {});
                    }
                }
                db.close();
            });
        });
    } else {
        res.render('404', {});
    }
});

router.get('/edit/:id', function (req, res, next) {
    var admin = req.session.admin;
    if (admin != true) {
        res.redirect('/login');
    } else {
        var id = req.params.id;
        if (id.length === 24) {
            MongoClient.connect(mongoUrl, function (err, db) {
                assert.equal(null, err);
                findDocById(db, id, function (doc) {
                    res.render('edit_blog', {title: doc[0].title, doc: doc[0]});
                    db.close();
                });
            });
        } else {
            res.render('404', {});
        }
    }
});

router.post('/edit/:id', function (req, res, next) {
    var admin = req.session.admin;
    if (admin === true) {
        var id = req.params.id;
        if (id.length === 24) {
            var title = req.body.title;
            var text = req.body.text;
            MongoClient.connect(mongoUrl, function (err, db) {
                assert.equal(null, err);
                db.collection('blogs').updateOne(
                    {'_id': ObjectId(id)},
                    {
                        $set: {
                            'title': title,
                            'text': text
                        }
                        //$currentDate: {"lastModified": true}
                    }, function (err, results) {
                        console.log(err);
                        res.json({state: 'ok', url: '/blog/' + id})
                    });
            });
        } else {
            req.json({state: 'no', msg: 'id错误'});
        }
    } else {
        req.json({state: 'no', msg: '您不是管理员'})
    }
});


router.get('/del/:id', function (req, res, next) {
    var admin = req.session.admin;
    if (admin === true) {
        var id = req.params.id;
        if (id.length === 24) {
            MongoClient.connect(mongoUrl, function (err, db) {
                assert.equal(null, err);
                db.collection('blogs').find({'_id': ObjectId(id)}).toArray(function (err, arr) {
                    if (arr.length > 0) {
                        res.render('del_blog', {title: arr[0].title, doc: arr[0]});
                    } else {
                        res.render('404', {});
                    }
                    db.close();
                });
            });
        } else {

        }

    } else {
        res.redirect('/login');

    }


});

router.post('/del/:id', function (req, res, next) {
    var admin = req.session.admin;
    if (admin === true) {
        var id = req.params.id;
        if (id.length === 24) {
            MongoClient.connect(mongoUrl, function (err, db) {
                assert.equal(null, err);
                db.collection('blogs').deleteOne(
                    {'_id': ObjectId(id)},
                    function (err, results) {
                        res.json({state: 'ok'});
                    }
                );
            });
        } else {
            req.json({state: 'no', msg: 'id错误'});
        }
    } else {
        req.json({state: 'no', msg: '您不是管理员'})
    }
});

router.get('/case', function (req, res, next) {
    res.render('case', {title: '案例'});
});
router.get('/about', function (req, res, next) {
    res.render('about', {title: '关于'});
});

router.get('/admin', function (req, res, next) {
    var admin = req.session.admin;
    if (admin != true) {
        res.redirect('/login');
    }
    res.render('admin', {title: 'admin'});
});

router.get('/logout', function (req, res, next) {

    req.session.destroy(function (err) {
        res.render('login', {title: 'login'});
    })

});

router.get('/admin/add_blog', function (req, res, next) {
    var admin = req.session.admin;
    if (admin != true) {
        res.redirect('/login');
    }
    res.render('admin_add_blog', {title: 'admin'});
});

router.get('/login', function (req, res, next) {
    res.render('login', {title: '管理员登陆'});
});
router.post('/login', function (req, res, next) {
    var admin = req.body.admin;
    var pass = req.body.pass;
    MongoClient.connect(mongoUrl, function (err, db) {
        assert.equal(null, err);
        db.collection('admin').find({admin: admin, pass: pass}).toArray(function (err, arr) {
            if (err) {
                res.render('login', {title: 'login again'});
            } else {

                if (arr.length === 1) {
                    req.session.admin = true;

                    res.redirect('/admin');
                } else {
                    res.redirect('/login');
                }
            }
        });
    });
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
    form.parse(req, function (err, fields, files) {
        var imgs = [];
        for (var key in files) {
            var file = files[key];
            //var fName = (new Date()).getTime();
            var fName = md5(fs.readFileSync(file.path));

            switch (file.type) {
                case "image/jpeg":
                    fName = fName + ".jpg";
                    break;
                case "image/png":
                    fName = fName + ".png";
                    break;
                default :
                    fName = fName + ".png";
                    break;
            }
            var uploadDir = path.resolve('public', 'upload', fName);

            imgs.push(fName);

            fs.rename(file.path, uploadDir, function (err) {
                if (err) {
                    res.json(err);
                } else {

                }
            });
        }
        res.json(imgs);
    });
});

router.get('/h5/pintu', function (req, res, next) {
    res.render('h5/pintu', {title: '拼图游戏'});
});

var findRestaurants = function (db, callback) {
    db.collection('blogs').find({}).toArray(function (err, arr) {
        callback(arr);
    });
};

var findDocById = function (db, id, callback) {
    db.collection('blogs').find({'_id': ObjectId(id)}).toArray(function (err, arr) {
        callback(arr);
    });
};

module.exports = router;
