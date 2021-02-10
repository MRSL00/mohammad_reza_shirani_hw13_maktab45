const express = require("express");
const app = express();


app.use(require("./routes/pages"))

app.listen(3000, function () {
  console.log("Server run on port 3000....")
});
