const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema({
    name : {type : String},
    mobile : {type: Number},
    image : {type : String},
    password : {type : String},
    uniqueId : {type: String}
  
});

const UserModel =  mongoose.model('user', UserSchema);

module.exports = UserModel;
