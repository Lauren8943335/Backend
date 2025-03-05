const ToDo = require("../models/user");

module.exports =  {
   getTodos:(req, res) => {
        console.log("get todos HIT");
        ToDo.find().then((found) => {
          console.log("found", found);
          res.json(found)
      })
      },
         
    create: (req, res) => {
              console.log("Create route hit", req.body);
              ToDo.create(req.body)
                .then((created) => {
                  console.log("created", created);
                  res.json(created);
                })
                .catch((err) => console.log("err", err));
            },
 
    delete: (req, res) => { 
        console.log("delete", req.params.id)
        ToDo.findByIdAndDelete(req.params.id)
        .then((deleted)=>{ 
          console.log("deleted", deleted);
          res.json(deleted);
        })
      .catch((err)=> console.log("err", err));
      
      },


    test: (req, res) => {
            console.log("TEST HIT")
            res.json({ msg: "Responding to your request" })
    },

    edit: (req, res) => {
            console.log("Edit Hit", req.params.id, req.body)
            ToDo.findByIdAndUpdate(req.params.id, req.body, {new: true})
                .then(updated => {
                    console.log("updatead", updated)
                })
}    
}     
