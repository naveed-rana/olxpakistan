var mongoose = require('mongoose');
var tockenSchema = mongoose.Schema({
    tocken:String,
    userid: String,
    timestamp : { type : Date, default: Date.now }
});

var tockenModels = mongoose.model('tockens', tockenSchema);

module.exports = tockenModels;