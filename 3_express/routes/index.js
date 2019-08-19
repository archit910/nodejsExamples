var express = require('express');
var person_api = require('./person_api')
var router = express.Router();

router.use('/api/p/', person_api) // This is for person API

module.exports = router


