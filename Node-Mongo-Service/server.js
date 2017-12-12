var express = require('express');
var scheme = require('./models/scheme.js');
var upload = require('./models/upload.js');
var upload1 = require('./models/upload1.js');
var template = require('./models/template.js');
var template1 = require('./models/template1.js');
var app = express();
var lmtcnt;
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/mfdb',{ useMongoClient: true });
console.log(mongoose.connection.readyState);

// include CORS functionality
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



//Create the default route
app.get('/',function(req,res){
	res.send('Please use the appropriate route');
})

app.get('/uploadMF', function (req, res) {
  res.sendFile(__dirname + '/index1.html');
});

app.get('/template', template1.get);

//Upload AMC Data to MongoDB
app.post('/', upload.post);

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