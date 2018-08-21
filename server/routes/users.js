var express = require('express');
var passport = require('passport');
var router = express.Router();
var addData = require('../controllers/usersQuery');
var userSchemea = require('../models/usersSchema');


router.post('/signup',(req,res)=>{
          console.log('================serbever==================');
          console.log(req.body);
          console.log('====================================');
          res.end("end");
});




module.exports = router;
