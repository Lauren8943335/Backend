// Import Express
// npm i express
const express = require('express');

// Initialize the app
const app = express();

app.use(express.json()); // Middleware to parse JSON body


// Define a port
const PORT = 3000
const FILE_PATH = Path2D.join(__dirname, 'todos.json')

app.use(express.json())

console.log('filepath', path.resolve())


app.get("/pokemon", (req, res) => {
    console.log("GET pokemon hit")
    res.json({msg: "pokemon hit"})
})
app.get("/", (req, res) => {
    console.log("/ endpoint  hit")
})

// Start the server
app.listen(PORT, () => {   
     console.log(`Server is running on http://localhost:${PORT:3000}`);
     });
// Define a simple route
app.get('/', (req, res) => {  //req, res cycle
    console.log("GET route hit / - ")
    res.send('From Get req on Server!');  //response
});





