var express = require("express");
const SongModel = require("../DAL/models/songModel");
var router = express.Router();
var songModel = new SongModel();
try {
  router.get("", (req, res) => {
    songModel.getAll().then((data) => {
      res.json({ count: data.length, songs: data });
    });
  });
  router.get("/findById/:id", (req, res) => {
    songModel.getById(req.params.id).then((data) => res.json(data));
  });
  router.get("/findBySongName", (req, res) => {
    let name = req.query.name;
    songModel.findBySongName(name).then((data) => {
      res.json({ count: data.length, songs: data });
    });
  });
  router.post("/createNewSong", (req, res) => {
    let newSong = req.body;
    songModel.create(newSong).then((data) => {
      res.json(data);
    });
  });
  router.put("/:id", (req, res) => {
    let id = req.params.id;
    let song = req.body;
    songModel.update(id, song).then((song) => {
      // console.log(song);
      res.json(song);
    });
  });
  router.delete("", (req, res) => {
    let id = req.query.id;
    songModel.delete(id).then((data) => {
      res.json(data);
    });
  });
  router.delete("/deleteAll", (req, res) => {
    songModel.deleteAll().then((data) => {
      res.json(data);
    });
  });
} catch (err) {
  res.json(err);
}
module.exports = router;
