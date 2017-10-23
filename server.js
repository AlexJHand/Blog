// Requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var index = require('./routes/index.router');
var blogRouter = require('./routes/blog.router');
require('dotenv').config;
var port = process.env.PORT || 4000;

// Static files
app.use(express.static('public'));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', index);
app.use('/blog', blogRouter);


// Listen
app.listen(port, function(){
    console.log('Listening on port:', port);
})