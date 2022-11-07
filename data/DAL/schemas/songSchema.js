const mongoose = require("mongoose");

const SongSchema = mongoose.Schema({
  // title: String,
  // description: String,
  // published: Boolean,
  name: String,
  author: String,
  url: String,
  id: Number,
  links: {
    images: {
      0: {
        url: String,
      },
      1: {
        url: String,
      },
    },
  },
});

module.exports = SongSchema;
