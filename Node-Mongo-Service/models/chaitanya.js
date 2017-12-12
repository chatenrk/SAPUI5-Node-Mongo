// This file will hold all the schemas and models related to 
// mutual fund app


var mongoose = require('mongoose');

var amcdetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    amccode: Number,
    amcname: String
    
});
 
var amcDetModel = mongoose.model('amcdetls', amcdetSchema);
 
module.exports = amcDetModel;