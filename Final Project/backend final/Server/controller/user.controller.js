const mongoose = require("mongoose")
const Auth = require("../model/user.model")
const bcrypt = require('bcrypt')
const jwt= require("jsonwebtoken") //create tokens
const cookieParser = require('cookie-parser');  //parse cookies

module.exports = {
    
   register: (req, res) => {

        console.log("Reg hit", req) 
    
        Auth.findOne({username : req.body.username})    //find one user by username
        .then(found => {
            console.log("found", found)
            if (!found){   //if username is not found
                console.log("Unique Username...Proceed")
                const hash = bcrypt.hashSync(req.body.password, 10)  //hash password
                console.log("HASH", hash)
    
                const newUser = new Auth(   //create new user
                    {
                        username: req.body.username,
                        password: hash
                    }
                )
    
                Auth.create(newUser)  //create user
                .then(created => {
                    console.log("created", created)
                .save()
                })
    
    
            } else {
                console.log("Username TAKEN")
            }
        })   //catch errors
        .catch(err => console.log(err))
    }, 
    login: (req, res) => {
        console.log("login", req.body)
    
        Auth.findOne({username : req.body.username})  //find user by username       
        .then (found => {
            console.log("found", found)
            if (bcrypt.compareSync(req.body.password, found.password)) {  //compare password
                console.log("Good Login")
    
                const token = jwt.sign({username: found.username, _id: found._id}, process.env.SECRET_KEY, {  //create token
                    expiresIn: '1h'
                })
    
                console.log("TOKEN", token)
    
                res.cookie("usertoken", token, {
                    httpOnly: true, 
                    maxAge:3600000})  //set cookie
                .json({msg: "good login", found, token})  //send token to client
            } else {
                console.log("Bad Login")
                res.json({msg: "bad login"})  //send error message
            }       
              
        })
        .catch(err => console.log(err))

    },

    //add new code for authCheck Route and JWT verification
    authCheck: (req, res) => {
        console.log("authCheck", req.headers.cookie)
       if (!req.headers.cookie) {  
        console.log("No token")
        return res.json({msg: "No token"})
    } else { 
            console.log("$$$", req.headers.cookie.split("=")[1])
            let split = req.headers.cookie.split("=")
            console.log("split", split[1])
            jwt.verify(split[1], process.env.SECRET_KEY, (err, payload) => {
            if (err) {
                console.log("Bad token")
                return res.json({msg: "Bad token"})
            } else {
                console.log("payload", payload.username)
                Auth.findById(payload._id)
                .then(found => {
                    console.log("found", found)
                    res.json({msg: "proceed", found})
                })
                .catch(err => console.log(err)) 
            }
            })
        }
    },
    
}

