const express = require("express");
const router = express.Router();

const data = require("../../public/7/home/carInfo/carsInfo.json");

router.post("/home", (req, res) => {
  res.json(data);
});

module.exports = router;
