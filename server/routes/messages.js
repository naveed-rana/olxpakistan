var express = require('express');
var router = express.Router();
var messageModels = require('../models/messageSchema');


router.post('/sendmessage',(req,res)=>{
    let newmessage = new messageModels(req.body);
    newmessage.save((err,messaeg)=>{
     if(err){
         res.status(401).json(err);
     }
     else{
         res.json("Message Successfully Submitted");
     }
    });
})

router.get('/getmessage',(req,res)=>{

    messageModels.find({"userid":req.query[0]},(err,data)=>{
        if(err){
            res.status(500).json("error has been occored!")
        }
        else{
            res.status(200).json(data);
        }
    });
     
});


module.exports = router;
