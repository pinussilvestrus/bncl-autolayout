const express = require('express');
const app = express();
const AutoLayout = require('./index.js');
const concat = require('concat-stream');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  next();
});

app.use(function(req, res, next){
  req.pipe(concat(function(data){
    req.body = data;
    next();
  }));
});

app.get('/', function (req, res) {
  res.sendStatus(200);
});

app.post('/autoLayout', function (req, res) {

  var xmlWithoutDI = req.body;

  if (!xmlWithoutDI) {
    res.send("Please input valid bpmn xml into the post body as 'bpmn'");
  }

  var autoLayout = new AutoLayout();
  autoLayout.layoutProcess(xmlWithoutDI.toString(), function(result) {
    res.send(result);
  });
});

app.listen(8082, function () {
  console.log('auto layout server listening on port 8082!');
});
