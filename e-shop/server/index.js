var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

// Initialize express app
var app = express();

// port to listen on for my express app
const port = 3001;

// Mongodb connection url
var MONGODB_URI = "mongodb+srv://maynawadii:maynawadii230898@cluster0.nqkeckk.mongodb.net/test";
  
// Connect to MongoDB
mongoose.connect(MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB @ '+port);
});
  
// Using bodyparser to parse json data
app.use(bodyparser.json());
  
// Importing routes
const user = require('../routes/user');
const products = require('../routes/products'); 
// Use user route when url matches /api/user/
app.use('/api/user', user);
// Use products route when url matches /api/products/
app.use('/api/products', products);
  
// Creating server
app.listen(port, () => {
    console.log("Server running at port: " + port);
});
