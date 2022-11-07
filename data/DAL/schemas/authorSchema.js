const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
  name: String,
  nation: String,
  id: Number,
  images: String,
});

module.exports = AuthorSchema;
