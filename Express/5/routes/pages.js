const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {
  res.send("<h1>Main</h1>");
});
router.get("/index1", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/5/index1.html"));
});
router.get("/index2", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/5/index2.html"));
});
router.get("/index3", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/5/index3.html"));
});
router.get("/index4", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/5/index4.html"));
});
router.get("/index5", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/5/index5.html"));
});

module.exports = router;
