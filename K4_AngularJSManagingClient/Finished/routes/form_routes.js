var express = require('express')
var router = express.Router()
var formController = require('../controllers/formController')

router.use('/assets', express.static(__dirname + '/../public'));

formController(router)
module.exports = router