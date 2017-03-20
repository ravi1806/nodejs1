var http = require(`http`);

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'}); /* What we give back is plain text */
    res.end('Hello World\n'); /* Last thing that We want to send */
}).listen(1337,'127.0.0.1'); /* Listen to the port/ports, localhost -> 127.0.0.1  */

