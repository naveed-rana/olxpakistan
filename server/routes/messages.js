var express = require('express');
var router = express.Router();
var messageModels = require('../models/messageSchema');
var tockenModel = require('../models/tockenSchema');

var FCM = require('fcm-push');

var serverKey = 'AAAAhSh9pj0:APA91bGk555jZPgQN_f-RgJZ7zrY2XBFd5Nga_DoMakH1jlTZoG_IJTi2O03VsXP4IIBfWwRhnZakt46696BOhmm5PSRnlPygLLw4tHZEUzqwuhMjDdMhI2gjZSutMFD4h6LxHGn737k';

var fcm = new FCM(serverKey);


router.post('/sendmessage',(req,res)=>{
    let newmessage = new messageModels(req.body);
    newmessage.save((err,messaeg)=>{
     if(err){
         res.status(401).json(err);
     }
     else{
        tockenModel.findOne({'userid':req.body.userid},(err,data)=>{
            if(err){
                res.status(200).json("Message Successfully Submitted");
            }
            else{
                if(data){
                var message = {
                    to: data.tocken, // required fill with device token or topics 
                    notification: {
                        title: req.body.title,
                        body: req.body.message,
                        icon:'/512x512.png'
                    }
                };

                fcm.send(message, function(err, response){
                    if (err) {
                        console.log("Something has gone wrong!");
                        res.status(200).json("Message Successfully Submitted");
                    } else {
                        console.log("Successfully sent with response: ", response);
                        res.json("Message Successfully Submitted");
                    }
                })}
            
            
            }
        })
     }
    });
})

router.get('/getmessage',(req,res)=>{

    messageModels.find({"userid":req.query[0]}).sort('-timestamp').exec((err,data)=>{
        if(err){
            res.status(500).json("error has been occored!")
        }
        else{
            res.status(200).json(data);
        }
    });
     
});


module.exports = router;
