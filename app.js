var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const passport = require('passport')
var session = require('express-session');
var mongoose = require('mongoose');
const cookieparser =require('cookie-parser');
var setuppassport = require('./server/Passport');
var dbURI = require('./server/config');
var usersRouter = require('./server/routes/users');
var ads = require('./server/routes/ads');
var seachRoutes = require('./server/routes/search');
var app = express();

//db connection
mongoose.connect(dbURI,{ useNewUrlParser: true }, function (err) {
  if (err) throw err;
  console.log('Successfully connected');
});

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(session({
  secret: "@#^&$!#_)(@!#)**(@^%*&^*#${}|{@#$@#$(#@",
  resave: true,
  saveUninitialized: true
}));
app.use(cookieparser());

app.use(passport.initialize());
app.use(passport.session());
setuppassport();


app.use('/user', usersRouter);
app.use('/ads', ads);
app.use('/search', seachRoutes);

app.use(express.static('public'));

app.listen(8080);

