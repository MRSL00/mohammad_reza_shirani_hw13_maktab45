const express = require("express");
const app = express();


app.get('/', function(req, res) {
    res.send("User");
});

app.get('/about', function(req, res) {
    res.send("about");
});

app.get('/content', function(req, res) {
    res.send("content");
});

let server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});