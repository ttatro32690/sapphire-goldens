var LocalStrategy = require('passport-local'),
       bodyParser = require('body-parser'),
         passport = require('passport'),
         mongoose = require('mongoose'),
          session = require('express-session'),
       RedisStore = require('connect-redis')(session),
          express = require('express'),
          favicon = require('serve-favicon'),
               fs = require('fs'),
              app = express();
              
// process.env.ENV = 'production';
// process.env.DATABASEURL = 'mongodb://travis:tet6649319@ds135577.mlab.com:35577/sapphire';

var db = process.env.DATABASEURL || 'mongodb://localhost/sapphire';
mongoose.Promise = global.Promise;
mongoose.connect(db);

app.set('view engine', 'ejs');

var User = require('./models/users');

app.use(bodyParser.json({limit: '16mb'}));
app.use(bodyParser.urlencoded({limit: '16mb', extended: false}));

app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico')); 

// Passport and Authentication
app.use(session({
    secret: 'annie is the best dog',
    resave: 'false',
    store: new RedisStore(),
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
          loginRoutes = require('./routes/users'),
          imageRoutes = require('./routes/images'),
           typeRoutes = require('./routes/types');

app.use('/application', applicationRoutes);
app.use('/agreement', agreementRoutes);
app.use('/sapphire', sapphireRoutes);
app.use('/goldens', goldenRoutes);
app.use('/images', imageRoutes);
app.use('/types', typeRoutes);
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

// var seedDB = require('./seeds.js');
// seedDB();

// Server Listen Command
app.listen(process.env.PORT, process.env.IP, function(){
   console.log('Server is Listening'); 
});