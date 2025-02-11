const express = require ('express'); //import express framwork
const app = express(); // create instance of express
const userRoutes = require('./routes/userRoutes');

//Middleware to parse json request bodies
app.use(express.json()); 

//use the userroutes for request starting with /users
app.use('/users, userRoutes'); 

//start the server on port 3000
app.listen(3000, () => 
    console.log("server running on port 3000")); 

