//create ref to express Module
var express = require('express');
//create express app object
var app = express();
// set the port
var port = 3000;
//listen on 3000
app.listen(port, function(){
    console.log('Express app listening on port ' + port);
})

//handle get request
app.get('/', function(request, response){
    response.send('Hello World from Node Express');
});

app.get('/test', function(request, response){
    response.send('you are now in the test dir');
});
