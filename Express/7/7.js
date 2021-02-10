const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(require("./routes/7/home"));
app.use(require("./routes/7/send_data"))
app.use(require("./routes/7/about"))
app.use(require("./routes/7/contact"))
app.use("/car",require("./routes/7/ShowPost"))



app.listen(3000, () => {
  console.log("Server run on port 3000....");
});
