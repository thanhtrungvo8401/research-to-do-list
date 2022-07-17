const upload = require("./multer")
const scanFiles = require("./scan-files")
const path = require('path');
const fs = require('fs')

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Danh sách việc làm',
            list: Object.keys(TO_DOS_OBJ)
                .sort((a, b) => a - b)
                .filter(key => key !== 'total')
                .map(key => ({
                    time: `${key.slice(0, 2)}H${key.slice(2)} : `,
                    action: TO_DOS_OBJ[key].slice(0, -9)
                })),
            total: TO_DOS_OBJ['total'].map(i => `${i};`)
        })
    })

    app.get('/upload', (req, res) => {
        res.render('upload', { title: 'Upload file' })
    })

    app.post('/upload', upload.single('file'), (req, res) => {
        scanFiles();

        res.json({ success: true })
    })

    app.get('/delete', (req, res) => {
        const { files } = req.query;
        const filesArr = files.split(';');

        filesArr.forEach(f => {
            fs.unlinkSync(path.join(__dirname, '..', 'public', 'to-dos', f));
        });

        scanFiles();

        res.json({ success: true })
    })
}