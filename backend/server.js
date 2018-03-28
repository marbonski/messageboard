var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var messages = [{text: 'some text', owner: 'Piter'}, {text: 'other text', owner: 'Dawid'}];

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");   
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
})

app.get('/messages', (req, res) => {
    res.json(messages);
})

app.post('/message', (req, res) => {
    console.log(req.body);
})

app.listen(1234);
