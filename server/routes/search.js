var express = require('express');
var router = express.Router();
var adsmodels = require('../models/adsSchema');


router.get('/getsuggestions',(req,res)=>{
   
    adsmodels.find({},'title tag -_id',(err,data)=>{
        if(err){
            res.status(500).json("error has been occored!")
        }
        else{
            let suggestions = [];
            data.forEach((item)=>{
                suggestions.push({label:item.title});
                suggestions.push({label:item.tag});
            });
            res.status(200).json(suggestions);
        }
    });
     
})


module.exports = router;
