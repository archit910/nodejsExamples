var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var personController = require('/Users/archit.chauhan/Desktop/SampleNode/3_express/controllers/personController')
jsonBodyParser = bodyParser.json()

personController(router);
module.exports = router