//Build a mini-project: Create a RESTful API with at least three resources and routes for each CRUD operation.

//make a sever with endpoints, test with postman

const express = require('express')
const app = express(); 
const items =[]; 

app.use(express.json()); //access to req.body

app.listen =(port, 3000)
const PORT = 3000; console.log(('Server running on PORT 3000'))

//student resource
//create a new student record  
app.GET('/student', (req, res) =>{ 
  const { studentID} = req.body; 
  console.log('CREATE route hit /-');  
res.json('studentId created')
}); 
//read all of the students records
app.POST('/student/:id',(req, res) =>{
console.log('READ route hit ', req.body);
res.json({message:'Getting Student RECORD'})
}); 
//update a specific students record
app.put('/student:id', (req, res) => { 
console.log('UPDATE route hit /-');
res.json('PUT item route hit')
}); 

//delete a students record
app.delete('/student/:id', (req, res)=>{ 
console.log('DELETE route hit /-');
res.json('DELETE item route hit')
});


//new class resource 
//create a new class
app.post('/classes', (req, res) =>{ 
    const classes = req.body; 
    console.log('CREATE route hit /-');  
  res.send('classes created')
  }); 
//read all of the new class added
  app.get('/classess:id',(req, res) =>{
    console.log('GET route hit /-');
    }); 
//update a specific class
    app.put('/classes:id', (req, res) => { 
    console.log('PUT route hit /-');
    }); 
//delete a class
    app.delete('/classes/:id', (req, res)=>{ 
    console.log('DELETE route hit /-');
    });


    //new schedule resource
    //create a new schedule
    app.post('/shedule', (req, res) =>{ 
        const classes = req.body; 
        console.log('CREATE route hit /-');  
      res.send('schedule created')
      }); 
    
      //read the new scheule
    app.get('/schedule:id',(req, res) =>{
        console.log('GET route hit /-');
        res.json('GET route hit')
        }); 
     //upadate a specific scehdule   
    app.put('/shedule:id', (req, res) => { 
        console.log('PUT route hit /-');
        res.json('PUT route hit')
        }); 
 //delete the schedule
    app.delete('/schedule/:id', (req, res)=>{ 
        console.log('DELETE route hit /-');
        res.json('DELETE route hit')
        });