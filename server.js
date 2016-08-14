var express = require('express');
var path = require('path');
var app = express();

app.use('/resources', express.static(__dirname + '/resources'));
app.use('/vendors', express.static(__dirname + '/vendors'));

app.get('/', function (req, resp) {
    resp.sendFile('index.html', {
        root: __dirname
    });
});

app.listen(1337, '127.0.0.1');
