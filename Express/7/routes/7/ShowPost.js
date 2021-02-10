const express = require("express");
const router = express.Router();
const path = require("path");
const data = require("../../public/7/home/carInfo/carsInfo.json");
router.use(express.static(path.join(__dirname, "../../public/7/show_car")));
router.use(express.static(path.join(__dirname, "../../public/7/home/carInfo")));

router.get("/:num", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/7/show_car/car.html"));
});

router.post("/:num", (req, res) => {
  res.json(data.find((el) => el.link === "/car/"+req.params.num));
});

module.exports = router;
