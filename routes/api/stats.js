const express = require("express");
const router = express.Router();

const Stat = require("../../models/Stat");

router.get("/all", (req, res) => {
  Stat.find().then((stats) => res.json(stats));
});

router.get("/latest/:days", (req, res) => {
  const date = new Date(
    new Date(
      new Date().setDate(new Date().getDate() - req.params.days)
    ).setUTCHours(0, 0, 0, 0)
  );
  Stat.find({ $and: [{ date }, { population: { $ne: undefined } }] })
    .sort({ country: 1 })
    .then((stats) => {
      res.json(stats);
    });
});

router.get("/country/:country", (req, res) => {
  Stat.find({ country: req.params.country })
    .sort({ date: -1 })
    .then((stats) => res.json(stats));
});

module.exports = router;
