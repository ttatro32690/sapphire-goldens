var express = require('express');
var router = express.Router();

var formidable = require('formidable'),
          path = require('path'),
            fs = require('fs');

router.post('/', function(req, res){

    var form = new formidable.IncomingForm();

    form.uploadDir = path.join(__dirname, '/../public/images/uploads');
    
    form.on('file', function(field, file){
        fs.rename(file.path, path.join(form.uploadDir, file.name));
        res.send({name: file.name});
    });
    
    form.parse(req);
    
});

module.exports = router;