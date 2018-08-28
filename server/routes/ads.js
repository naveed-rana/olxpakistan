var express = require('express');;
var router = express.Router();
var adsSchemea = require('../models/adsSchema');
var multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
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
     newAds.media = media;
     
     newAds.save((err,add)=>{
       if(err){
         res.json(500,"Error occoured while saving ads");
       }
       else{

        res.json(200,'Your ads succefully submitted!');
       }
     });

       
});




module.exports = router;
