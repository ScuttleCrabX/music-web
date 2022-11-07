var express = require("express");
const authorModel = require("../DAL/models/authorModel");
var router = express.Router();
var AuthorModel = new authorModel();
try {
  router.get("", (req, res) => {
    AuthorModel.getAll().then((data) => {
      res.json({ count: data.length, authors: data });
    });
  });
  router.get("/findById/:id", (req, res) => {
    AuthorModel.getById(req.params.id).then((data) => res.json(data));
  });
  router.get("/findByAuthorName", (req, res) => {
    let name = req.query.name;
    AuthorModel.findByAuthorName(name).then((data) => {
      res.json({ count: data.length, authors: data });
    });
  });
  router.post("/createNewAuthor", (req, res) => {
    let newAuthor = req.body;
    AuthorModel.create(newAuthor).then((data) => {
      res.json(data);
    });
  });
  router.put("/:id", (req, res) => {
    let id = req.params.id;
    let author = req.body;
    AuthorModel.update(id, author).then((author) => {
      // console.log(song);
      res.json(author);
    });
  });
  router.delete("", (req, res) => {
    let id = req.query.id;
    AuthorModel.delete(id).then((data) => {
      res.json(data);
    });
  });
  router.delete("/deleteAll", (req, res) => {
    AuthorModel.deleteAll().then((data) => {
      res.json(data);
    });
  });
} catch (err) {
  res.json(err);
}
module.exports = router;
