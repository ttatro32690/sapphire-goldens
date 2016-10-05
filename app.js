var express = require("express"),
        app = express();

app.set("view engine", "ejs");

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

var indexRoutes = require("./routes/index"),
    aboutRoutes = require("./routes/about");
    
app.use(indexRoutes);
app.use("/about", aboutRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is Listening"); 
});