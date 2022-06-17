const express = require('express');
const { model } = require('mongoose');
// const Model = require('../model/model');
const Paper = require('../model/paper.model')

const router = express.Router()

// Posting data to Database.
//Post Method
router.post('/uploadpaper', async (req, res) => {
    const paperUload = new Paper({
        title: req.body.title,
        heading: req.body.heading,
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
            Paper.paperfile = req.file.path
           }

    try {
        const paperToSave = await paperUload.save();
        res.status(200).json(paperToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Getting all the data from the Database.
// Getting data based on the ID.
router.get('/paper', async (req, res) => {
    try{
        const paperUload = await Paper.find();
        res.json(paperUload)
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
router.get('/paper/:department', async (req, res) => {
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