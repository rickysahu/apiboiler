'use strict';

// Load required packages
var express = require('express');
var logger = require('logops');
var expressLogging = require('express-logging');
var doSomethingController = require('./controllers/doSomething.js');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 1234;

// Create our Express application
var app = express();

// Express logger
app.use(expressLogging(logger));
logger.setLevel(process.env.NODE_ENV === 'production' ? 'INFO' : 'DEBUG');
logger.debug('API is running - DEBUG Mode');

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Create our Express router
var router = express.Router();

// Homepage
router.route('/')
  .get(function (req, res) {res.send({}); });

// do something methods
router.route('/do-something')
  .get(doSomethingController.doSomething);

// Register all our routes with /api
app.use('/api/v1', router);

// Start the server
app.listen(PORT);
logger.debug('API running on port:', PORT);
