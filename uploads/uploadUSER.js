const path = require('path')
const multer = require('multer')


//  creating the path to store the profile pictures 
var storage = multer.diskStorage({
    destination: function(req,res, cb){
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})
// uploading the file images
var upload = multer({
    storage:storage,
    fileFilter: function(req, file, callback){
        if(
         file.mimetype == "image/png" ||
         file.mimetype ==  "image/jpg")
        {
            callback(null, true)
        }
        else{
            console.log("Only jpg, png file is supported..")
            callback(null, false)
        }
    },
    limits:
    {
        fileSize: 10024 * 1024 * 2
    }
})
//   exporting the module here
module.exports = upload

