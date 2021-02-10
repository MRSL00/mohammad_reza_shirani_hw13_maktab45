const express = require("express");
const app = express();
let path = require('path');


app.use(express.static(path.join(__dirname, '/public/2')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/2/2.html'));
});

let server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
