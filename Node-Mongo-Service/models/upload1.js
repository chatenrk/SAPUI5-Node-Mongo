var csv = require('fast-csv');
var mongoose = require('mongoose');
var mfdetlsModel = require('./mfdetails')
 
exports.post = function (req, res) {
	debugger;
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
     
    var mfdetFile = req.files.file;
 
    var mfdetls = [];
         
    csv
     .fromString(mfdetFile.data.toString(), {
         headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
          
         mfdetls.push(data);
     })
     .on("end", function(){
    	 if(mfdetls.length===0){return res.status(400).send('No Data found to upload');}
    	 mfdetlsModel.create(mfdetls, function(err, documents) {
            if (err) throw err;
         });
          
         res.send(mfdetls.length + ' Mutual Fund Details have been successfully uploaded.');
     });
    
    
    
    
};


exports.get = function(callback){
	mfdetlsModel.find(callback);
}