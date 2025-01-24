const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json()); // access to the req.body  (post)

require("dotenv").config(); //gives access to .env file

const PORT = 3000;

const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  todo: String,
  created: Date,
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

app.get("/test", (req, res) => {
  console.log("Test route hit");
  res.json({ msg: "success" });
});

app.get("/gettodods", (req, res) => {
  console.log("get todos HIT");
  ToDo.find().then((found) => {
    console.log("found", found);
    res.json(found)
});
});

app.post("/create", (req, res) => {
  console.log("Create route hit", req.body);
  ToDo.create(req.body)
    .then((created) => {
      console.log("created", created);
      res.json(created);
    })
    .catch((err) => console.log("err", err));
});

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI) //syntax to get into .env file
    .then(() => {
      //promise
      console.log("Connected to Database");
    });
  console.log(`Server is runnning on port ${PORT}`);
});
