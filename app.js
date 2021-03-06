var LocalStrategy = require('passport-local'),
       bodyParser = require('body-parser'),
       nodemailer = require('nodemailer'),
         passport = require('passport'),
         mongoose = require('mongoose'),
          session = require('express-session'),
          express = require('express'),
          favicon = require('serve-favicon'),
               fs = require('fs'),
              app = express();

var config = require('./config/config.js');

// 

var db = process.env.DATABASEURL || config.database.url;
mongoose.Promise = global.Promise;
mongoose.connect(db);

app.set('view engine', 'ejs');

var User = require('./models/users');

app.use(bodyParser.json({limit: '16mb'}));
app.use(bodyParser.urlencoded({limit: '16mb', extended: false}));

app.use(favicon(__dirname + '/public/images/favicon.jpg'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

// Passport and Authentication
app.use(session({
    secret: 'annie is the best dog',
    resave: 'false',
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
var applicationRoutes = require('./routes/application'),
       sapphireRoutes = require('./routes/sapphire'),
         goldenRoutes = require('./routes/goldens'),
         uploadRoutes = require('./routes/uploads'),
          loginRoutes = require('./routes/users'),
          imageRoutes = require('./routes/images'),
           typeRoutes = require('./routes/types');

app.use('/application', applicationRoutes);
app.use('/sapphire',    sapphireRoutes);
app.use('/goldens',     goldenRoutes);
app.use('/uploads',     uploadRoutes);
app.use('/images',      imageRoutes);
app.use('/types',       typeRoutes);
app.use(loginRoutes);

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

// Server Listen Command
app.listen(process.env.PORT, process.env.IP, function(){
   console.log('Server is Listening'); 
});