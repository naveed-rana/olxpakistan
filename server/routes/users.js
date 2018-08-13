var express = require('express');
var passport = require('passport');
var router = express.Router();
var addData = require('../controllers/usersQuery');
/* GET users listing. */


router.post('/login',passport.authenticate("login"),(req,res)=>{
          console.log('================serbever==================');
          console.log(req.user);
          console.log('====================================');
          res.end("end");
});




module.exports = router;
