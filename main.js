/**
 * Created by duc on 04/03/2016.
 */
var express = require('express');
var _ = require('lodash');
var app = express();

app.get('/', function (req, res) {
  res.send('It\'s works. Use /stream for testing purpose');
});

app.get('/stream', function (req, res, next) {
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');


  function sendParts(res, flag) {
    if(flag){
      var endPart = {x:0, y:0};
      res.write(JSON.stringify(endPart));
      res.write(JSON.stringify(']}'));
      res.end();
      return next();
    }else{
      var numParts = Math.floor( (Math.random()*10)%5 + 1 );
    }
  }
});



app.listen(3000, function () {
  console.log("Server is running!");
});