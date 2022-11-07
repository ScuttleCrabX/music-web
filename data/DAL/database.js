const mongoose = require("mongoose");
class database {
  constructor() {}
  connect = async () => {
    await mongoose.connect(
      "mongodb+srv://admin123:admin123@cluster0.jdsiybc.mongodb.net/music_website"
    );
  };
}

module.exports = database;
