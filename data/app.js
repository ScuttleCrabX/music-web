var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var songRouter = require("./routes/songs");
var authorRouter = require("./routes/author");
const port = process.env.PORT || 16522;
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var cors = require("cors");
app.use(cors());
app.use("/api/authors", authorRouter);
app.use("/", indexRouter);
app.use("/api/songs", songRouter);
const database = require("./DAL/database");
const db = new database();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  db.connect().then((err, result) => {
    if (err) throw err;
    console.log("database is connected");
  });
});
