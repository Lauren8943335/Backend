const express = require ("express")
const cors = require('cors')
const app = express()
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())


const PORT = 300

app.get("/test"(req, res)=> { 
    console.log("Test route hit")
    res.json({msg:"success"})
})

app.listen(port, ()=> { 
 console.log (`Server is running on port${PORT}`)
})
