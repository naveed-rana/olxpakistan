var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cellNo: String,
    address: String,
    province: String,
    city: String
});

var usersModels = mongoose.model('users', userSchema);

module.exports =usersModels;