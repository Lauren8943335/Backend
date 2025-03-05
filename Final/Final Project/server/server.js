const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(cors(
  {origin: "http://localhost:3000"}
));

const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  todo: String,
  created: Date,
});

const ToDo = mongoose.model("ToDoSchema", ToDoSchema);

const PORT = 3000;

app.get("/test", (req, res) => {
  console.log("get test hit");
  res.json({ msg: "success" });
});

app.get("/gettodos", (req, res) => {
  console.log("get midterm HIT");
  ToDo.find().then((found) => {
    console.log("found", found);
    res.json(found);
  });
});

app.post("/create", (req, res) => {
  console.log("create route hit", req.body);
  ToDo.create(req.body)
    .then((created) => {
      console.log("created", created);
      res.json(created);
    })
    .catch((err) => console.log("err", err));
});

app.delete("/delete/:id", (req, res) => {
  console.log("delete", req.params.id);
  ToDo.findByIdAndDelete(req.params.id)
  .then((deleted) => {
    console.log("deleted", deleted);
    res.json(deleted);
  })
  .catch((err)=> consol.log("err", err))
});

app.put("/edit/:id", (req, res) => {
  console.log("edit hit", req.params.id, req.body);
  ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updated) => {
      console.log("updated", updated);
      res.json(updated);
    })
    ToDo.findById(req.params.id)
    .then((found) => {
      console.log("found", found);
      found.todo = req.body.todo;
      found.save();      
    })
});


app.listen(PORT, () => {
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database"); 
    console.log(`The server is running on port ${PORT}`);
  });
});mn