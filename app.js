var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var AutoLayout = require('./index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  next();
});

app.post('/autoLayout', function (req, res) {

  var xmlWithoutDI = req.body.bpmn;

  if (!xmlWithoutDI) {
    res.send("Please input valid bpmn xml into the post body as 'bpmn'");
  }

  var autoLayout = new AutoLayout();
  autoLayout.layoutProcess(xmlWithoutDI, function(result) {
    res.send(result);
  });
});

app.listen(8082, function () {
  console.log('auto layout server listening on port 8082!');
});
