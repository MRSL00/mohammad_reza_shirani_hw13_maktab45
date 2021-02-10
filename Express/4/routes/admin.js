const express = require("express");
const router = express.Router();

const data = require("../public/users.json"); 

router.get("/getAllUsers", (req, res) => {
  res.send(data);
});

module.exports=router;