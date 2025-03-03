const mongoose = require ("mongoose")
const Schema = mongoose.Schema


const AuthSchema = new Schema(
    {
        username:
        {
            type: String,
            required: true,
            unique: true
        }
        ,
        password: {
            type: String,
            required: true

        },
        created: Number, 

        email: { 
            type: String,
            // required: true
        }, 

        todo: [{
            type: String,
            // required: true
    }]
    }
)
const Auth = mongoose.model('Auth', AuthSchema)

module.exports = Auth