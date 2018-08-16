var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    pass: String
});

var usersModels = mongoose.model('users', userSchema);

module.exports =usersModels;