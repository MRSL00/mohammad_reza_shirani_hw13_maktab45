const express = require("express");
const router = express.Router();

const data = require("../public/users.json"); 

router.post("/getUser", (req, res) => {
  res.json(data.find(el=> el.userName.toLowerCase === req.body.userName.toLowerCase));
});

module.exports = router;
