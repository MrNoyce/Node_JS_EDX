
var http = require('http'); // Use HTTP Module
var port = 3000; // port number
//
// Function to handle incoming rquests
var requestHandler = function (request, response) {
    console.log('new request to: ' + request.url);
    response.end('Hello World');
}

//Create Server Onject
var server = http.createServer(requestHandler);

//listen on port 3000
server.listen(port, function() {
    console.log('listening on port ' + port);
});
