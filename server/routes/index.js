const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;

router.get("/", async (req, res, next) => {
  try {
    const [hotels, restaurants, activities] = await Promise.all([
      Hotel.findAll({ include: [{ all: true }] }), // eager loading
      Restaurant.findAll({ include: [{ all: true }] }),
      Activity.findAll({ include: [{ all: true }] })
    ]);
    res.json({ hotels, restaurants, activities });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
