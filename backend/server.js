var express = require('express');
var app = express();

var messages = [{text: 'some text', owner: 'Piter'}, {text: 'other text', owner: 'Dawid'}];

app.get('/messages', (req, res) => {
    res.json(messages);
})

app.listen(1234);
