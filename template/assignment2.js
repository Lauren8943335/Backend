// this is where ill do my new assignment
 
const express = require('express')
const app = express();
const items = []; //simple in-memory database 

// Middleware
app.use(express.json()); 

const PORT = 3000

//create (POST)
app.post('/items', (req, res)=>{ 
    const item = req.body;
    console.log("CREATE route hit /-"); 
    items.push(item); 
    console.log("item", item); 
    res.status(201).send('Item created');  
}); 
//Read (GET)
app.get('items', (req, res) => { 
    console.log("GET route hit / -")
    res.json(items);
});
//Update(PUT)
app.put('items/:id', (req, res)=>{ 
    const id= parseInt(req.params.id); 
    console.log("PUT route hit / -"); 
    const updateItem = req.body; 
    console.log("items", items);
    items[id] = updateItem; 
    res.send('Item updated');
});
//Delete (DELETE)
app.delete('/items/:id', (req, res)=>{ 
    const id= parseInt(req.params.id);
    console.log("DELETE route hit / -")
    items.splice(id, 1); 
    res.send('Item deleted'); 
}); 

app.listen(3000, ()=>{ 
 console.log('Server is running on port 3000')
}); 