var express = require('express');;
var router = express.Router();
var tockenSchemea = require('../models/tockenSchema');


router.post('/post',(req,res)=>{
     let newTocken = new tockenSchemea(req.body);
     tockenSchemea.findOneAndUpdate({userid:req.body.userid},req.body,(err,add)=>{
       if(err){
        newTocken.save((err,data)=>{
          if(err){
            res.status(500).json("err");
          }else{
            res.status(200).json('Your Ad Successfully Submitted!');
          }
        });
       }
       else{
        res.status(200).json('Your Ad Successfully Submitted!');
       }
     });
     

       
});




module.exports = router;
