const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/admintik/Desktop/Login-Register/test/public/img')
    },
    filename:    function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});


const upload = multer({storage: storage}).single('img');


const ImgUpload = (req, res, next) => {

    upload(req, res, function (err) {
        if (err) {
            throw err
        }
        res.json({
            success: true,
            message: 'Image uploaded!'
        });
        next()
    })
};


module.exports = ImgUpload;