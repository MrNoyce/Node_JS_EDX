var express = require('express');
var app = express();
var port = 3000;

//adding body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('quotes2.db');


app.listen(port, function(){
    console.log('Connected on port ' + port)
})

app.get('/', function(request, response){
    response.send('Get request recieved at /');
});

app.get('/quotes', function(req, res){
    if(req.query.year){
        db.all('SELECT * FROM Quotes WHERE year = ?', [req.query.year], function(err, rows){
            if(err){
                res.send(err.message);
            }
            else{
                console.log("Return a list of quotes from the year: " + req.query.year);
                res.json(rows);
            }
        });
    }
    else{
        db.all('SELECT * FROM Quotes', function processRows(err, rows){
            if(err){
                res.send(err.message);
            }
            else{
                for( var i = 0; i < rows.length; i++){
                    console.log(rows[i].quote);
                }
                res.json(rows);
            }
        });
    }
});

app.get('/quotes/:id', function(req, res){
    console.log('return quotes with the ID: ' + req.params.id);
    db.get('SELECT * FROM quotes WHERE rowid = ?', [req.params.id], function(err,row){
        if(err){
            res.send(err.message);
        }
        else{
            res.json(row);
        }
    });
});

app.post('/quotes', function(req, res){
    console.log("insert new quote: " + req.body.quote);
    res.json(req.body);
});
