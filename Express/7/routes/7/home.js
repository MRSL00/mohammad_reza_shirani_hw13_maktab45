const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.static(path.join(__dirname, "../../public/7/home")));

router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/7/home/home.html"));
});

module.exports = router;
