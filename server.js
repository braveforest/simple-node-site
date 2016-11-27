// require ous dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

//use ejs and expressLayouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded());

//route our app
var router = require('./app/route');
app.use('/', router);

// set static files (css and image)
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function() {
    console.log('app started');
});
