var express = require('express');
var scheme = require('./models/scheme.js');
var app = express();
var lmtcnt;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{ useMongoClient: true });
console.log(mongoose.connection.readyState);



//Create the default route
app.get('/',function(req,res){
	res.send('Please use the appropriate route');
})

// Scheme related operations
// Get scheme code data from MongoDB
app.get('/getSchemes',function(req,res)
{
	
	scheme.getSchemes(function(err,data){
			
				if(err){throw err;}
				else
				{
					res.send(data);
				}
			},lmtcnt);
});

app.listen(3000);
console.log('Listening on port 3000');