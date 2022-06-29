const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Ananthu:9048569429@cluster0.vox8una.mongodb.net/?retryWrites=true&w=majority"
  );
};
