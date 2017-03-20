var http = require('http');
var fs = require('fs');
/*Streams are always more perfomance efficient than using fs.readFileSync*/
/*We already have a res stream here, we only pipe the output to it*/
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res); /*read the template*/

}).listen(1337, '127.0.0.1');