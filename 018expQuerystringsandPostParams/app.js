var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public')); /*now use this in index file*/

app.set('view engine','ejs'); /* By default the app.set will search for files in the folder views */


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

app.use('/',function (req,res,next) {
    console.log('Request Url: ' + req.url);
    next(); /* this just means go on next middleware */
});

app.get('/',function (req,res) {
    // use send method and no need to mention the content type
    res.render('index'); /* render will go where the views are(views folder) and then select index file with ejs extension that we setup by app.set */
});

app.get('/api',function (req, res) {
    res.json({firstName: 'Ravi', lastName: 'Yadav'});
});

app.get('/person/:id', function (req, res) {
    res.render('person',{ID: req.params.id, Qstr: req.query.name}); /*render takes data object as the second paramater*/
});

app.post('/person', urlencodedParser,  function (req, res) {
    res.send('Thank you');
    console.log(req.body.firstName); /* we get this body from urlencodedParser */
    console.log(req.body.lastName);
});

app.post('/personjson', jsonParser,  function (req, res) {
    res.send('Thank you for the json data');
    console.log(req.body.firstName); /* we get this body from urlencodedParser */
    console.log(req.body.lastName);
});


app.listen(port);