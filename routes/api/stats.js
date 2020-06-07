const express = require("express");
const router = express.Router();

const Stat = require("../../models/Stat");

const date = new Date(
  new Date(new Date().setDate(new Date().getDate() - 1)).setUTCHours(0, 0, 0, 0)
);

router.get("/all", (req, res) => {
  Stat.find().then((stats) => res.json(stats));
});

router.get("/latest", (req, res) => {
  Stat.find({ date })
    .sort({ country: 1 })
    .then((stats) => res.json(stats));
});

router.get("/country/:country", (req, res) => {
  Stat.find({ country: req.params.country })
    .sort({ date: -1 })
    .then((stats) => res.json(stats));
});

module.exports = router;
