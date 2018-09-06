var mongoose = require('mongoose');
var messageSchema = mongoose.Schema({
    message:String,
    title:String,
    username: String,
    userphone: String,
    adsid: String,
    userid: String,
    timestamp : { type : Date, default: Date.now }
});

var messageModels = mongoose.model('messages', messageSchema);

module.exports = messageModels;