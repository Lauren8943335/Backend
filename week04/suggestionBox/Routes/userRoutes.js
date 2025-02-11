const express = require("express"); //import express for routing
const router = express.Router(); // create a new router 
const userController = require("./controllers/userControllers");//import the user controller

//route to get all users

//GET /users
router.get('/, userController.getAllUsers')

//route to create a new user
//POST /users
router.post('/, userController.createUser')

//export the router to the server
module.exports=router; 


