var mongoose = require('mongoose')
var bodyParser = require('body-parser')
jsonBodyParser = bodyParser.json()

mongoose.connect('mongodb://127.0.0.1:27017/test_app');

var Schema = mongoose.Schema;
var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String 
})

var PersonModel = mongoose.model('Person', personSchema);

module.exports = function(app) {
    // Create Person in mongoDB

    app.post('/create', jsonBodyParser, function(req, res){
        console.log('Request body : ' + req.body);
        var john = PersonModel({
            firstname: req.body['firstname'],
            lastname: req.body['lastname'],
            address: req.body['address']
        });
        var response = {
            'message': 'can not be saved'
        };
        // This is asynchronous now !! 
        john.save(function(err){
            if(err) throw err;
            console.log('Person saved!!!')
            response['message'] = 'Person Saved'
            res.send(response);
        });
       
    })

    // Find a person in mongoDB
    app.get('/find', function(req, res) {
        //console.log(req.query);
        var firstname = req.query.firstname;
        response = {
            'message' : ' Could not find the person',
            'err' : '',
            'data': {}
        }
        var query = PersonModel.find({firstname:firstname})
        
        // Now this query is in asyn again !
        query.exec(function(err, docs){
                if(err){
                    response['err'] = err.toString()
                    res.send(response)
                }
                console.log('****** FINDING RECORD *******')
                console.log(docs);
                response['message'] = 'Found the record !';
                response['data'] = docs
                res.send(response)
        });
        
    })

    
}

