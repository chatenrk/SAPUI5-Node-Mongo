var json2csv = require('json2csv');
 
exports.get = function(req, res) {
 
    var fields = [
        'code',
        'dnav',
        'amc',
        'fname',
        'nav'
    ];
 
    var csv = json2csv({ data: '', fields: fields });
 
    res.set("Content-Disposition", "attachment;filename=mfdetails.csv");
    res.set("Content-Type", "application/octet-stream");
 
    res.send(csv);
 
};