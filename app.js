var mongoose = require('mongoose'),
     express = require('express'),
     favicon = require('serve-favicon'),
         fs = require('fs'),
         app = express();

var db = process.env.DATABASEURL || 'mongodb://localhost/sapphire';
mongoose.connect(db);

app.set('view engine', 'ejs');

var seeds = require('./seeds');
seeds();

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico')); 

var sapphireRoutes = require('./routes/sapphire');
app.use(sapphireRoutes);

app.get('*', function(req, res){
    if(req.url === '/'){
        res.render('index');
    } else {
        fs.access(__dirname + req.url, fs.F_OK, function(err) {
                if (!err) {
                    res.sendFile(__dirname + req.url); 
                } else {
                    res.redirect('/');
                }
            });   
    }
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log('Server is Listening'); 
});