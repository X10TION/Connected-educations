const express = require('express');
const { model } = require('mongoose');
// const Model = require('../model/model');
const Pastq = require('../model/FQA')

const router = express.Router()

// Posting data to Database.
//Post Method
router.post('/pastQA', async (req, res) => {
    const pastQ = new Pastq({
        courseTitle: req.body.courseTitle,
        description:req.body.description,
        department: req.body.department,
        school: req.body.school,
        category: req.body.category,
        // model_id: mongoose.schema.objectId,
           })
           if(req.file){
            Pastq.qafile = req.file.path
           }

    try {
        const pastToSave = await pastQ.save();
        res.status(200).json(pastToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Getting all the data from the Database.
// Getting data based on the ID.
router.get('/pastQA', async (req, res) => {
    try{
        const pastQuest = await Pastq.find();
        res.json(pastQuest)
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
router.get('/pastQA/:department', async (req, res) => {
    try{
        const data = await Pastq.find({department: req.params.department});
        res.json(data)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})


module.exports = router;