var express = require('express')
var route = require('./routes/index')
var personController = require('./controllers/personController')
var app = express()

app.set('view engine', 'ejs')
var person_api = require('./routes/person_api')

app.use('/', route);
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
app.use('/api/p/v1/', person_api);

personController(app);

app.listen(3000);
console.log('Server Running on port 3000')

