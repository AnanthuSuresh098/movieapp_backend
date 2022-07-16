const express = require("express");

var cors = require("cors");

const movieController = require("./controllers/movieController");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/products", movieController);

module.exports = app;