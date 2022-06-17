const mongoose = require('mongoose')
const model = require('./model')


const mediaSchema = new mongoose.Schema({

    urls:{
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
    model_id:
    {
        type:mongoose.Schema.objectId,
        ref: model,
        require: true,
        index: true
    },
    multimide:{
        type: String
    },
},
    {
        timestamps: true
})
module.exports = mongoose.model('multimedia', mediaSchema)
