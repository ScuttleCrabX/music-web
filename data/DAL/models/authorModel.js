const { default: mongoose } = require("mongoose");
const AuthorSchema = require("../schemas/authorSchema");

class AuthorModel {
  constructor() {
    this.model = mongoose.model("authors", AuthorSchema);
  }

  create(newAuthor) {
    return this.model.create(newAuthor);
  }

  getAll() {
    return this.model.find({});
  }
  getById(id) {
    return this.model.findById(id);
  }
  findByAuthorName(name) {
    return this.model.find({ name: { $regex: `.*${name}.*` } });
  }

  update(id, author) {
    return this.model.findByIdAndUpdate(id, {
      $set: {
        name: author.name,
        nation: author.nation,
        id: author.id,
        images: author.iamges,
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

module.exports = AuthorModel;
