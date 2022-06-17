const path = require('path')
const multer = require('multer')


//  creating the path to store the profile pictures 
var storage = multer.diskStorage({
    destination: function(req,res, cb){
        cb(null, './uploads/pastQustions')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})
// uploading the file images
var past_upload = multer({
    storage:storage,
    fileFilter: function(req, file, callback){
        if(
            file.mimetype == "application/pdf" ||
            file.mimetype ==  "application/docx" ||
            file.mimetype ==  "text/html")
        {
            callback(null, true)
        }
        else{
            console.log("Only pdf, docx file is supported..")
            callback(null, false)
        }
    },
    limits:
    {
        fileSize: 10024 * 1024 * 2
    }
})
//   exporting the module here
module.exports = past_upload

