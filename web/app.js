var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var games = require('./routes/games');
var admin = require('./routes/admin');
var blog = require('./routes/blog');
var app = express();
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
app.use(favicon(path.join(__dirname, 'public/favicon.ico')));

app.use(session({
    secret: 'wb',
    store: new MongoStore({url: 'mongodb://localhost/web'})
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/game', games);
app.use('/users', users);
app.use('/admin', admin);
app.use('/blog', blog);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    err.status = 404;
    console.log('get');
    console.log(req.session);
    if (!req.session) {
        return next(new Error('oh no')) // handle error
    }
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
