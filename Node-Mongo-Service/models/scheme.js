var mongoose = require('mongoose');
 
var schemeDataSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    scode: Number,
    sname: String
});
 
var schemeDataModel = mongoose.model('schemes', schemeDataSchema);
 
module.exports = schemeDataModel;
module.exports.getSchemes = function(callback,lmtcnt)
{

// Check if there are documents in the collection
	var schCount = schemeDataModel.count();
	
	if (schCount === 0)
	{
		callback(new Error("No Data Found"));
	}
	else
	{
	
// Set default limit to 10, if nothing is passed	
	if(lmtcnt === undefined){lmtcnt=10;}
	
// Get the data from MongoDB	
	schemeDataModel.find(callback).limit(lmtcnt);
	}
}





//if (!lmtcnt){
//	
//}else{
//	if (schemeModel.count()===0){
//		callback(new Error('No documents found'));
//	}else{

//	}
//}
//}




//var schemeModel = new mongoose.model('schemes',schemeDataSchema);
//
//module.exports.getSchemes = function(callback,lmtcnt){
//	if (!lmtcnt){
//		
//	}else{
//		if (schemeModel.count()===0){
//			callback(new Error('No documents found'));
//		}else{
//		schemeModel.find(callback).limit(lmtcnt);
//		}
//	}
//}
//
//module.exports.schemeModel = schemeModel;