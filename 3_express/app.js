var express = require('express')
var app = express()
app.set('view engine', 'ejs')
var person_api = require('./routes/person_api')

// Use MiddleWare
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
    console.log('Request URL: ' + req.url);
    next();
})

app.get('/', function(req, res){
    res.status = 200
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>HelloWorld</h1></body></html>')
});

// app.get('api/p',function(req, res){
//     console.log(req.params)
//     res.send('<html><head></head><body><h1> '+ req.params.id + '</h1></body></html>')
// });

app.get('/api', function(req, res){
    console.log(req.params);
    console.log(req.query)
    res.json({
        firstname: 'Archit',
        lastname: 'Chauhan',
        age: '23',
    })
});

// Now let's learn routing in Express
app.use('/api/p/', person_api)
app.listen(3000);
console.log('Server Running on port 3000')

