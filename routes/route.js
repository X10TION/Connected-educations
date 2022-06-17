const express = require('express');
const { model } = require('mongoose');
const Model = require('../model/model');
// const Books = require('../model/books.model')

const router = express.Router()

// Posting data to Database.
//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        department: req.body.department,
        registration_id: req.body.registration_id,
        school: req.body.school,
        password: req.body.password,
        username: req.body.username,
        programm: req.body.programm,
      
           })
           if(req.file){
               data.avater = req.file.path
           }

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Getting all the data from the Database.
// Getting data based on the ID.
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
// Updating data based on the ID.
//Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })
// Deleting data based on the ID.
//Delete by ID Method
router.get('/student/:department', async (req, res) => {
    try{
        const data = await Model.find({department: req.params.department});
        res.json(data)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})


module.exports = router;