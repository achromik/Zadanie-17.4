var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//to parse param in POST method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

//Handling GET method
app.get('/userformGet', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

//handling POST method
app.post('/userformPost', (req, res) => {
    const response = req.body;
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, 'localhost', () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listen on http://' + host + ':' + port);
})