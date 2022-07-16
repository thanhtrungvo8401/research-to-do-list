const fs = require('fs');
const path = require('path');

module.exports = function () {
    fs.readdir(path.join(__dirname, '..', 'public', 'to-dos'), (err, files) => {
        if (err) console.log(err);
    
        else {
            files.forEach(f => {
                if (path.extname(f) == '.mp3') {
                    // console.log(path.basename(f, '.mp3'));
                }
            })
        }
    })
}


