// This file is used to capture the upload functions, 
//that put data into MongoDB

var amcdetlsModel = require('../models/chaitanya.js');
var csv = require('fast-csv');
var mongoose = require('mongoose');


// This method posts AMC data into MongoDB
exports.post = function (req, res) {
	
	debugger;
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
     
    var amcdetFile = req.files.file;
 
    var amcdetls = [];
         
    csv
     .fromString(amcdetFile.data.toString(), {
         headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
          
         amcdetls.push(data);
     })
     .on("end", function(){
    	 if(amcdetls.length===0){return res.status(400).send('No Data found to upload');}
    	 amcdetlsModel.create(amcdetls, function(err, documents) {
            if (err) throw err;
         });
          
         res.send(amcdetls.length + ' AMC Details have been successfully uploaded.');
     });
    
    
    
    
};

exports.postData = function(req,res){
	if(req.data)
		{
		
		}
}
