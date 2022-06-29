const express = require("express");

const router = express.Router();

const Movies = require("../models/movies.model");

router.get("", async (req, res) => {
  try {
    const movies = await Movies.find().lean().exec();
    console.log(movies);
    return res.send(movies);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("", async (req, res) => {
  const movie = await Movies.create(req.body);
  return res.send({ movie });
});

router.delete("/:id", async (req, res) => {
  try {
    const movies = await Movies.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(movies);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const movie = await Movies.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(movie);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
