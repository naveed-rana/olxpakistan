var mongoose = require('mongoose');
var feedBackSchema = mongoose.Schema({
    username: String,
    email: String,
    message:String
});

var feedBackModels = mongoose.model('feedback', feedBackSchema)
module.exports =feedBackModels;