const express = require("express");


const movieController = require("./controllers/movieController");

const app = express();

app.use(express.json());

app.use("/products", movieController);

module.exports = app;