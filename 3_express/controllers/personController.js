var bodyParser = require('body-parser')
jsonBodyParser = bodyParser.json()

module.exports = function(app) {
        app.post('/api/p/v2/insert/:id', jsonBodyParser, function(req, res){
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
});}

