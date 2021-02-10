const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use("/admin",require("./routes/admin"));




app.use("/user",require("./routes/user"));



app.listen(3000, function () {
  console.log("Server run on port 3000....");
});
