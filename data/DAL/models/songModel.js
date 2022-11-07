const { default: mongoose } = require("mongoose");
const SongSchema = require("../schemas/songSchema");

class songModel {
  constructor() {
    this.model = mongoose.model("songs", SongSchema);
  }

  create(newSong) {
    return this.model.create(newSong);
  }

  getAll() {
    return this.model.find({});
  }
  getById(id) {
    return this.model.findById(id);
  }
  findBySongName(name) {
    return this.model.find({ name: { $regex: `.*${name}.*` } });
  }

  update(id, song) {
    return this.model.findByIdAndUpdate(id, {
      $set: {
        name: song.name,
        author: song.author,
        url: song.url,
        id: song.id,
        links: song.links,
      },
    });
  }

  delete(id) {
    return this.model.findByIdAndDelete(id);
  }
  deleteAll() {
    return this.model.deleteMany({});
  }
}

module.exports = songModel;
