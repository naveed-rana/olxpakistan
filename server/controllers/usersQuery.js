var  usersModels = require('../models/usersSchema');


function addData(req,res){
   var newuser = usersModels();
   newuser.name = req.body.name;
   newuser.pass = req.body.pass;
   newuser.save((err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Todo added successfully',user});
  })
}

module.exports = addData;
 
