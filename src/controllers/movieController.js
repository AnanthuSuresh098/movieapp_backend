const express = require("express");

const router = express.Router();

const Products = require("../models/movies.model");

router.get("", async (req, res) => {
  try {
    const products = await Products.find().lean().exec();
    console.log(products);
    return res.send(products);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("", async (req, res) => {
  const product = await Products.create(req.body);
  return res.send({ product });
});

router.delete("/:id", async (req, res) => {
  try {
    const products = await Products.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(products);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
