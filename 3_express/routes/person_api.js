var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
jsonBodyParser = bodyParser.json()
router.post('/insert/:id', jsonBodyParser, function(req, res){
    var response = {
        'message' : 'Person inserted',
        'error': '',
        'data' : {
            'x': '',
            'y': 0,
            'z': []
        }
    }
    console.log(req)
    res.status = 200; // statusCode
    res.send(req.body);
});


module.exports = router