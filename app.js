var express = require("express"),
        app = express();

app.set("view engine", "ejs");

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("index");    
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is Listening"); 
});