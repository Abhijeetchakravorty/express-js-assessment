var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var http = require('http');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var config = require('./config/config');
var app = express();
var mongoose = require('mongoose');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
        extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
        next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
});

app.use(function(req, res, next) {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('IP: '+ip);
        let origin = req.get('origin');
        console.log(config.SERVER_PROTOCOL+'://'+config.ROKYO_CLIENT_HOST);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        next();
});

mongoose.connect("mongodb://localhost:27017/"+config.STUDENT_DB_SCHEMA, { useNewUrlParser: true })
	.then(() => {
		http.createServer(app).listen(config.SERVER_PORT);
                console.log('Server is running on PORT: '+config.SERVER_PORT);
	})
module.exports = app;