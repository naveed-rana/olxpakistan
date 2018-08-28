var express = require('express');;
var router = express.Router();
var userSchemea = require('../models/usersSchema');
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
     
       console.log(req.body);
       console.log(req.files);
       res.json(200,'done');
       
});




module.exports = router;
