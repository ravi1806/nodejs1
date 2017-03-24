var express = require('express');

var app = express();

var port = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public')); /*now use this in index file*/

app.set('view engine','ejs'); /* By default the app.set will search for files in the folder views */

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
    res.render('person',{ID: req.params.id}); /*render takes data object as the second paramater*/
});
app.listen(port);