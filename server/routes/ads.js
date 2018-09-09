var express = require('express');;
var router = express.Router();
var adsSchemea = require('../models/adsSchema');
var multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
      }
  });
 
  const upload = multer({ storage });


router.post('/posting',upload.any(),(req,res)=>{
      let media = [];
      req.files.forEach((file)=>{
      media.push(file.filename)
       });   

     let newAds = new adsSchemea();
     newAds.title = req.body.title;
     newAds.category = req.body.category;
     newAds.condition = req.body.condition;
     newAds.price = req.body.price;
     newAds.discriptions = req.body.discriptions;
     newAds.tag = req.body.tag;
     newAds.user = req.body.user;
     newAds.username = req.body.username;
     newAds.userphone = req.body.userphone;
     newAds.useremail = req.body.useremail;
     newAds.userlocations = req.body.userlocations;
     newAds.media = media;
     
     newAds.save((err,add)=>{
       if(err){
         res.status(500).json("Error occoured while saving ads");
       }
       else{

        res.status(200).json('Your Ad Successfully Submitted!');
       }
     });

       
});




module.exports = router;
