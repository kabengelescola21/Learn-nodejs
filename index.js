const express = require('express');
const app = express();
const route = require('router');
app.use('/static', express.static(__dirname + '/public'));
var myLogger = function(req, res, next){
    console.log('LOGGED');
    next();
};
//load controller

//var appController = require('/routes/appController')

app.use(myLogger);
app.put('/user', function create(req, res) {
    res.send('ok')
});
app.delete('/user', function delete_data(req, res) {
    res.send('ok')
});
app.get('/', function create(req, res) {
    res.send('ok')
});
app.post('/', function create(req, res) {
    res.send('ok')
});
app.listen(4000, function(){
    console.log('Listening on port 4000!')
});