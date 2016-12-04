var LocalStrategy = require('passport-local'),
       bodyParser = require('body-parser'),
         passport = require('passport'),
         mongoose = require('mongoose'),
          session = require('express-session'),
          express = require('express'),
          favicon = require('serve-favicon'),
               fs = require('fs'),
              app = express();

var db = process.env.DATABASEURL || 'mongodb://localhost/sapphire';
mongoose.Promise = global.Promise;
mongoose.connect(db);

app.set('view engine', 'ejs');

var seeds = require('./seeds');
seeds();

var User = require('./models/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico')); 

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
      agreementRoutes = require('./routes/agreement'),
       sapphireRoutes = require('./routes/sapphire'),
         goldenRoutes = require('./routes/goldens'),
          loginRoutes = require('./routes/users');

app.use('/application', applicationRoutes);
app.use('/agreement', agreementRoutes);
app.use('/sapphire', sapphireRoutes);
app.use('/goldens', goldenRoutes);
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

app.listen(process.env.PORT, process.env.IP, function(){
   console.log('Server is Listening'); 
});