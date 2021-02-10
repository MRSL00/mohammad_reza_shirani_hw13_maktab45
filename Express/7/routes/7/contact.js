const express = require("express");
const router = express.Router();
const path = require("path");
router.use(express.static(path.join(__dirname, "../../public/7/contact")));
router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/7/contact/contact.html"));
});

module.exports = router;
