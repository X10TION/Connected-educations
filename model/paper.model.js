const mongoose = require('mongoose')
const model = require('./model')

const journalSchema = new mongoose.Schema({

    title:{
        type:String,
        required: true
    },
    heading:{
        type: String
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
    paperfile:{
        type: String
    }
},
    {
        timestamps: true
})
module.exports = mongoose.model('paper', journalSchema)
