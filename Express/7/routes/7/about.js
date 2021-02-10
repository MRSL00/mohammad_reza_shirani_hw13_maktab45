const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/7/about/about.html"));
});

module.exports = router;
