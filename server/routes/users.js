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
    
    if (req.isAuthenticated()) {
        res.status(200).json("user succefully login");        
    }
    else{
        res.status(400).json("user not found, error occoured!");    
    }}
)


router.get('/logout',(req,res)=>{
    if(req.logout()){
    res.json(200,"succefully logout!");}
    else{
     res.json(500,"error occoured!");
    }
})

router.get('/authenticate',(req,res)=>{
    if(req.isAuthenticated()){
        res.json(200,req.user)
     }
     else{
        res.json(500,'user is not logged in!')
     }
})

router.post('/emailVerification',(req,res)=>{
    userSchemea.findOne({email:req.body.email},(err,user)=>{
        if(user){
        res.status(200).json("email already in use");}
        else{
            res.json(200,"readytouse"
            )
        }
        
    });
})

module.exports = router;
