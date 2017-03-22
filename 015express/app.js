var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/',function (req,res) {
 // use send method and no need to mention the content type
 res.send('<html><head></head><body><h1>GooD Tuesday Mornin g</h1></body></html>')
});

app.get('/api',function (req, res) {
 res.json({firstName: 'Ravi', lastName: 'Yadav'});
});

app.get('/person/:id', function (req, res) {
   res.send(`<html><head></head><body><h3>Person: ${req.params.id}</h3></body></html>`)
});
app.listen(port);