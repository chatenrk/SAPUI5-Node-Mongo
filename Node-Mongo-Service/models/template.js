var json2csv = require('json2csv');
 
exports.getAMCTemplate = function(req, res) {
 
    var fields = [
    	'amccode',
        'amcname'
    ];
 
    var csv = json2csv({ data: '', fields: fields });
 
    res.set("Content-Disposition", "attachment;filename=amcdetails.csv");
    res.set("Content-Type", "application/octet-stream");
 
    res.send(csv);
 
};