const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/:name", (req, res)=> {
  res.sendFile(path.join(__dirname, `../public/5/${req.params.name}.html`));
});

module.exports = router;
