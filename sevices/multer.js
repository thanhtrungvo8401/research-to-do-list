const multer = require('multer');
const path = require('path');

const DIR = path.join(__dirname, '..', 'public', 'to-dos');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const filename = file.originalname.toLocaleLowerCase().split(' ').join('-');

        console.log(req.body);

        cb(null, filename);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (["audio/mpeg3", "audio/x-mpeg-3", "audio/mpeg"].includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error('Only mp3 file format allowed!'));
        }
    }
});


module.exports = upload;