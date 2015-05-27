var express = require('express');
var app = express();

app.use('/acik',express.static('acik'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/yasin.htm');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
