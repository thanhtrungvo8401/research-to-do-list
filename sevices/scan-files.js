const fs = require('fs');
const path = require('path');

module.exports = function () {
    fs.readdir(path.join(__dirname, '..', 'public', 'to-dos'), (err, files) => {
        if (err) console.log(err);
    
        else {
            const toDos = { total: [] };

            files.forEach(f => {
                if (path.extname(f) == '.mp3') {
                    const fileWithoutType = path.basename(f, '.mp3');
                    
                    toDos[fileWithoutType.slice(-4)] = f;

                    toDos.total.push(path.basename(f));
                }
            })

            global.TO_DOS_OBJ = toDos;
        }
    })
}


