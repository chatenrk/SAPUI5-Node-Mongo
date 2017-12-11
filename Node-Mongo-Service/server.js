var express = require('express');

var app = express();

//Create the default route
app.get('/',function(req,res){
	res.send('Please use the appropriate route');
})

app.listen(3000);
console.log('Listening on port 3000');