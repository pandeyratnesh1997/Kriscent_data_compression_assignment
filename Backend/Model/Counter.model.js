const mongoose = require('mongoose');

const CounterSchema =  mongoose.Schema({
    id : {type : String},
    sequence : {type : Number}
});

const CounterModel =  mongoose.model('counter', CounterSchema);

module.exports = CounterModel;

