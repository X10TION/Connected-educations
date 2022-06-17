const mongoose = require('mongoose')
// const model = require('./model')

const pastSchema = new mongoose.Schema({

   
    courseTitle:{
        type: String
    },
    description:{
        type:String
    },
    department:{
        type: String,
    },
    school:{
        type: String
    },
    category:{
        type: String,
    },
    // model_id:
    // {
    //     type:mongoose.Schema.objectId,
    //     ref: model,
    //     require: true,
    //     index: true
    // }
    fqafile:{
        type: String
    }
},
    {
        timestamps: true
})
module.exports = mongoose.model('pastq', pastSchema)
