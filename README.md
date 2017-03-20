# NODEJS

## Create a server

* Method .createServer gets a callback function with 
* request and stream(where we can stream the respnse back)
* A http response starts with whats in the head by res.writeHead(status, header);
* Last data to send is done by res.end method.
* Listen to the ports by method listen on createServer object.
* Port will route the request to this program properly.

#### HTTP Request ->
```
CONNECT www.google.com:443 HTTP/1.1
Host: www.google.com
Connection: keep-alive /* Host and connection are the headers which are name value pairs */
```
#### HTTP Response ->
```
HTTP/1.1 200 OK /*This is the status */
/* Headers */
Content-Length: 44
Content-Type: text/html /* MIME(Multipurpose Internet Mail Extenstions) type */
```
#### Basic code for a server in nodejs

```js
  http.createServer(function (req,res) {
	res.writeHead(200, {'Content-Type': 'text/plain'}); /* What we give back is plain text */
	res.end('Hello World\n'); /* Last thing that We want to send */
  }).listen(1337, '127.0.0.1'); /* Listen to the port/ports, localhost - 127.0.0.1  */	

```
