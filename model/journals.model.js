const mongoose = require('mongoose')
// const model = require('./model')

const journalSchema = new mongoose.Schema({

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
    category:{
        type: String,
    },
   journalfile:{
        type: String
    }
    // model_id:
    // {
    //     type:mongoose.Schema.objectId,
    //     ref: model,
    //     require: true,
    //     index: true
    // }
},
    {
        timestamps: true
})
module.exports = mongoose.model('journal', journalSchema)
