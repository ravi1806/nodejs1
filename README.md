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
## NPM

* npm init gives a json file with settings called package.json
* npm install will install all the dependencies inside package.json. 
* npm test runs the default script in the package.json
* npm install packagename will install the package in node_modules directory but won't update the package.json file.
* npm install packagename --save will update the package.json file with the installation of new package.
* semantic version is MAJOR.MINOR.PATCH
	* ^ means update the next version with minor and patch
	* ~ means update only with patch.
* npm install packagename --save-dev will add the dependency in devDependencies which aren't needed to run the app.
* npm install -g packagename installed the package globally. they too aren't needed to run the app.  


## EXPRESS

* HTTP Method: Specifies the type of action the request wants to make -> GET,POST,DELETE etc. called VERBS. 
* A GET Request->
	```
	   GET/?id=4&page=3 HTTP/1.1
	   HOST:www.learnweb.net
	   Cookie:username=abc;name=Rau
	```
* A POST Request of form->
	```
	  POST/HTTP/1.1
	  Host:www.learnweb.net
	  Content-Type:application/x-www-form-urlencoded
	  Cookie:num=4;page=2
	  
	  username=Rau&password=pwd
	```
```js
	var express = require('express'); /* returns a function express so we need to call this */
	var app = express(); /*app is also a function, express function called here on which we have properties and method */
	
	var port = process.env.PORT || 3000; /* process is a global object provided by node, env is for environment and PORT is env variable */	
	
	app.get('URL', CBfunction(req, res) {
	 res.send('SOME HTML'); /* Not reqd to mention the content type */
	});
	
	app.post('URL', CBfunction(req, res) {});
	
	app.listen(port);
	
```

### Middleware and Static Files

* Whatever happens between the request and response comes under middleware.(code sitting btw req and res)
* Middleware can have multiple layers of levels.
* Static files are those which are not processed by code, eg. html, css and image files.
* We use the middleware to push these static files to the server, so they can be accessed by the req. without manual resp.
* To use the middleware we use `app.use('routeHere', middleware(pathOfFile));`
* In app.get everytime we see routeHere/SomeFile it will go find pathOfFile/SomeFile and stream the response back.
* We can use our own Middleware as a callback function `app.use('routeHere', CallbackFunction(req,resp,next){});`
* next() means run the next middleware.
* When we don't specify a route in the app.use, it will use it always(for all routes). eg. `app.use(cookieParser());`


### Template and Template Engines

* First, you can either change the views location or let it be default at `app.set('views','./views');` i.e views folder.
* Install a template engine such as ejs/jade. eg. `npm install --save ejs`
* Next set the view engine by `app.set('view engine', 'file extension/template engine');`
* the files in the views folder will have an extension of the template engine.
* Inside app.get, apply render to res and use eg. `res.render('person',{ID: req.params.id});` where second param is optional.
* A very imp. thing to note here is that when we link the css in the html, don't foreget to put / before the path to make it as root. Otherwise, browser will look for a folder instead of using the middleware.


