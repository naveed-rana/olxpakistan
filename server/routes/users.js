var express = require('express');
var passport = require('passport');
var router = express.Router();
var addData = require('../controllers/usersQuery');
var userSchemea = require('../models/usersSchema');


router.post('/signup',(req,res)=>{
          let newUser = new userSchemea(req.body);
          newUser.save((err,user)=>{
              if(err){
                  res.status(500).json("error has been occored!")
              }
              else{
                  res.status(200).json("Account has been created!")
              }
          });
});

router.post('/login',passport.authenticate('local'),(req,res)=>{
 
     res.status(200).json(req.user);
    }
)


router.post('/logout',(req,res)=>{
   console.log(req.user);
    req.logout();
    console.log(req.user);
    res.status(200).json("succefully logout!");
    
   
})

router.get('/authenticate',(req,res)=>{
    if(req.isAuthenticated()){
        res.status(200).json(req.user)
     }
     else{
        res.status(401).json('user is not logged in!')
     }
})

router.post('/emailVerification',(req,res)=>{
    userSchemea.findOne({email:req.body.email},(err,user)=>{
        if(user){
        res.status(200).json("email already in use");}
        else{
            res.status(200).json("readytouse"
            )
        }
        
    });
})


router.post('/try',(req,res)=>{
    let newUser = new userSchemea(req.body);
    newUser.save((err,user)=>{
        if(err){
            res.status(500).json("error has been occored!")
        }
        else{
            res.status(200).json("Account has been created!")
        }
    });
     
})


module.exports = router;
