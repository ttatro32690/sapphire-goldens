var express = require("express"),
    favicon = require("serve-favicon"),
        app = express();

app.set("view engine", "ejs");

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + "/public/images/favicon.ico")); 

app.get("/", function(req, res){
    res.render("index");
});

app.get('*', function(req, res){
    res.sendFile(__dirname + req.url);
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is Listening"); 
});