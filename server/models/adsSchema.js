var mongoose = require('mongoose');
var adsSchema = mongoose.Schema({
    title: String,
    category: String,
    condition: String,
    price: String,
    discriptions: String,
    tag: String,
    user: String,
    media:Array,
    timestamp : { type : Date, default: Date.now }
});

var adsModels = mongoose.model('ads', adsSchema);

module.exports =adsModels;