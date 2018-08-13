var  feedbackModels = require('../models/feedBackSchema');


function addFeedBack(req,res){
   var newfeedback =new feedbackModels();
   newfeedback.username = req.body.username;
   newfeedback.email = req.body.email;
   newfeedback.message = req.body.message;

   newfeedback.save((err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Todo added successfully',user});
  })
}

module.exports = addFeedBack;
 
