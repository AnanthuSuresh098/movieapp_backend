const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    MovieName: { type: String, required: true },
    Rating: { type: Number, required: true },
    Cast: { type: Array, required: true },
    Genre: { type: String, required: true },
    ReleaseDate: { type: Date, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Movies = mongoose.model("Movie", movieSchema);

module.exports = Movies;
