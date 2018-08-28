var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    title: String,
    category: String,
    condition: String,
    price: String,
    discriptions: String,
    tag: String,
    user: String
});

var usersModels = mongoose.model('users', userSchema);

module.exports =usersModels;