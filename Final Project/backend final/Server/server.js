const express = require("express");
const cors = require("cors");
const app = express(); //ininitializes express
const mongoose = require("mongoose");
require("dotenv").config();
const Router = require("./routes/routes");
const cookieParser = require("cookie-parser");


require("dotenv").config();

app.use(cookieParser());
app.use(express.json()); //middleware to parse JSON body
app.use(cors(
  {origin: "http://localhost:5173", 
  credentials: true}
));

Router(app);
//define a port
const PORT = 3000;

//start the server
app.listen(PORT, () => {
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database"); 
    console.log(`The server is running on port ${PORT}`);
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
});