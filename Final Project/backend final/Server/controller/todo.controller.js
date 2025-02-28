const ToDo = require("../model/todo.model");

module.exports = {

    test: (req, res) => {
        console.log("get test hit")
        res.json({msg: "success"})
    },
    gettodos: (req, res) => {
        console.log("get final HIT")
        ToDo.find().then((found) => {
          console.log("found", found);
          res.json(found);
        });
    },
    create: (req, res) => {
        console.log("create route hit", req.body);
        ToDo.create(req.body)
          .then((created) => {
            console.log("created", created);
            res.json(created);
          })
          .catch((err) => console.log("err", err));
      },
    delete: (req, res) => {
        console.log("delete", req.params.id);
        ToDo.findByIdAndDelete(req.params.id)
        .then((deleted) => {
          console.log("deleted", deleted);
          res.json(deleted);
        })
        .catch((err)=> consol.log("err", err))
      },
      
    edit: (req, res) => {
        console.log("edit hit", req.params.id, req.body);
        ToDo.findByIdAndUpdate(req.params.id, req.body

        )
          .then((updated) => {
            console.log("updated", updated);
            res.json(updated);
          })
          ToDo.findById(req.params.id)
          .then((found) => {
            console.log("found", found);
            found.ToDo = req.body.ToDo;
            found.save();      
          })                    
}
}
