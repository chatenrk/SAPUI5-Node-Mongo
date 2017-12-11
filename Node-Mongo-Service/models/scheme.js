var mongoose = require('mongoose');
 
var schemeDataSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    scode: Number,
    sname: String
});
 
var schemeDataModel = mongoose.model('schemes', schemeDataSchema);
 
module.exports = schemeDataModel;
module.exports.getSchemes = function(callback){
	var lmtcnt = 10;
	schemeDataModel.find(callback).limit(lmtcnt);
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