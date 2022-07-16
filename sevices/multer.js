const multer = require('multer');
const path = require('path');

const DIR = path.join(__dirname, '..', 'public', 'to-dos');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const filename = file.originalname.toLocaleLowerCase().split(' ').join('-');

        cb(null, filename);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const validType = ["audio/mpeg3", "audio/x-mpeg-3", "audio/mpeg"].includes(file.mimetype);

        const nameWithoutType =path.basename(file.originalname, '.mp3')
        const validName = nameWithoutType.slice(-5).startsWith('-') && +nameWithoutType.slice(-4, -2) < 24 && +nameWithoutType.slice(-2) < 60;

        if (validType && validName) {
            cb(null, true)
        } else {
            cb(new Error('Name or type invalid'));
        }
    }
});


module.exports = upload;