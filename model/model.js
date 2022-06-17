const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
   
    name: {
        required: true,
        type: String
    },
    department: {
        required: true,
        type: String
    },
    registration_id: {
        required: true,
        unique:true,
        type: String
    },
    school: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    programm: {
        required: true,
        type: String,
    },
    avater:{
        type: String
    },
    isStaff:{
        type: Boolean,
        required: true
    }
},{
        timestamps:true
    
})

module.exports = mongoose.model('Data', dataSchema)