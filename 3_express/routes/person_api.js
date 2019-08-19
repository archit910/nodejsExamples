var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var personController = require('../controllers/personController')
jsonBodyParser = bodyParser.json()

personController(router);
module.exports = router