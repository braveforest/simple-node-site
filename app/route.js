// require express
var express = require('express');
var path = require('path');
// create our router object
var router = express.Router();
//export our router
module.exports = router;

// route our homepage
router.get('/', function(req, res){
    // res.sendFile(path.join(__dirname, '../index.html'));
    res.render('pages/index');
});

// about page
router.get('/about', function(req, res){
    var users = [
        { name : 'Holly' , email : 'awdwa@gmail.com' , avatar: 'http://placekitten.com/300/300'},
        { name : 'chris' , email : 'chris@gmail.com' , avatar: 'http://placekitten.com/300/300'},
        { name : 'Ali' , email : 'Ali@gmail.com' , avatar: 'http://placekitten.com/300/300'},
    ];
    res.render('pages/about', { users: users});
});

// contact
router.get('/contact', function(req, res){
    // res.sendFile(path.join(__dirname, '../about.html'));
    res.render('pages/contact');
});
router.post('/contact', function(req,res){
    res.send('Thanks for contacting us,' + req.body.name + '!');
});
