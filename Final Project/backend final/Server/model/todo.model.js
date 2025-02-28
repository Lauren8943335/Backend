const mongoose = require ("mongoose")
const Schema = mongoose.Schema
// const bcrypt = require('bcrypt')

const ToDoSchema = new Schema(
    {
        todo:
        {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'Auth',    
            // required: true
        },
     
        username: String,
        
        created: Number
    }
    
)
const ToDo = mongoose.model('ToDo', ToDoSchema)

module.exports = ToDo