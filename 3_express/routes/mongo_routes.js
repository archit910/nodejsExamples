var express = require('express');
var router = express.Router();
var mongoController = require('../controllers/mongoController');


mongoController(router)
module.exports = router