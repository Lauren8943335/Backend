<<<<<<< HEAD
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
=======
const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const app = express()

app.use(cors())
app.use(express.json())

require('dotenv').config()

const PORT = 3000
>>>>>>> 8bd50e1112e219e9bd5745c58143b74f17dd265c





const Schema = mongoose.Schema

const ToDoSchema = new Schema(
    {

        todo: String   ,
        created:  Number

    }
)
const ToDo = mongoose.model('ToDo', ToDoSchema)



app.get("/test", (req, res) => {
<<<<<<< HEAD
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
=======
    console.log("Test route hit")
    res.json({ msg: "success" })
})

app.get("/getTodos", (req, res) => {
    console.log("getTodos HIT")
    ToDo.find()
        .then(found => {
            console.log("Found", found)
            res.json(found)
        })
})

app.post("/create", (req, res) => {
    console.log("Create Route HIT", req.body)
    ToDo.create(req.body)
        .then(created => {
            console.log("created", created)
            res.json(created)
        })
})

app.delete("/delete/:id", (req, res) => {
    console.log("Delete Hit", req.params.id)
    ToDo.findByIdAndDelete(req.params.id)
        .then(deleted => {
            console.log("deleted", deleted)
            res.json(deleted)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err.message })
        })
})

app.listen(PORT, () => {

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to Database")
        })
        .catch(err => console.log(err))

    console.log(`Server is runnning on port ${PORT}`)
})
>>>>>>> 8bd50e1112e219e9bd5745c58143b74f17dd265c
