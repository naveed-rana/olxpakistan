var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const passport = require('passport')
var session = require('express-session');
var mongoose = require('mongoose');
var setuppassport = require('./server/Passport');
var dbURI = require('./server/config');
var usersRouter = require('./server/routes/users');
var feedBackRouter = require('./server/routes/feedback');
var app = express();

//db connection
mongoose.connect(dbURI, function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());


app.use(session({
  secret: "naveed screet",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
setuppassport();
 

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feedback', feedBackRouter);

app.use(express.static('public'));

app.listen(8080)

