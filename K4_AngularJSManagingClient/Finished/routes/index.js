var express = require('express')
var router = express.Router();
var form_routes = require('./form_routes')
router.use('/first', form_routes)

module.exports = router