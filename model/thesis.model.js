const mongoose = require('mongoose')
// const model = require('./model')

const thesisSchema = new mongoose.Schema({

    title:{
        type:String,
        required: true
    },
    publicationDate:{
        type: String
    },
    author:{
        type: String
    },
    description:{
        type:String
    },
    abstract:{
        type: String,
    },
    department:{
        type: String,
    },
    school:{
        type: String
    },
    // model_id:
    // {
    //     type:mongoose.Schema.objectId,
    //     ref: model,
    //     require: true,
    //     index: true
    // }
    thesisFile:{
        type: String
    }
},
    {
        timestamps: true
})
module.exports = mongoose.model('thesis', thesisSchema)
