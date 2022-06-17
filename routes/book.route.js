const express = require('express');
const { model } = require('mongoose');
// const Model = require('../model/model');
const Books = require('../model/books.model')

const router = express.Router()

// Posting data to Database.
//Post Method
router.post('/uploadbooks', async (req, res) => {
    const BookUload = new Books({
        title: req.body.title,
        author: req.body.author,
        description:req.body.description,
        abstract: req.body.abstract,
        department: req.body.department,
        school: req.body.school,
        category: req.body.category,
        // model_id: mongoose.schema.objectId,

           })
           if(req.file){
            BookUload.bookfile = req.file.path
           }

    try {
        const bookToSave = await BookUload.save();
        res.status(200).json(bookToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Getting all the data from the Database.
// Getting data based on the ID.
router.get('/books', async (req, res) => {
    try{
        const databook = await Books.find();
        res.json(databook)
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
router.get('/books/:department', async (req, res) => {
    try{
        const bookdata = await Books.find({department: req.params.department});
        res.json(bookdata)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})


module.exports = router;