const express = require('express');
const { model } = require('mongoose');
// const Model = require('../model/model');
const Thesis = require('../model/thesis.model')

const router = express.Router()

// Posting data to Database.
//Post Method
router.post('/theses', async (req, res) => {
    const thesesUload = new Thesis ({
        title: req.body.title,
        publicationDate: req.body.publicationDate,
        author: req.body.author,
        description:req.body.description,
        abstract: req.body.abstract,
        department: req.body.department,
        school: req.body.school,
        category: req.body.category,
        // model_id: mongoose.schema.objectId,

           })
           if(req.file){
            Thesis.thesisFile = req.file.path
           }
    try {
        const thesesToSave = await  thesesUload.save();
        res.status(200).json(thesesToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Getting all the data from the Database.
// Getting data based on the ID.
router.get('/theses', async (req, res) => {
    try{
        const thesesUload = await  Thesis.find();
        res.json(thesesUload)
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
//search by department 
router.get('/theses/:department', async (req, res) => {
    try{
        const data = await Books.find({department: req.params.department});
        res.json(data)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})


module.exports = router;