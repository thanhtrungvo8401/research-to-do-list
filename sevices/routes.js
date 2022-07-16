const upload = require("./multer")
const scanFiles = require("./scan-files")

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Danh sách việc làm',
            list: Object.keys(TO_DOS_OBJ)
                .sort((a, b) => a - b)
                .map(key => ({
                    time: `${key.slice(0, 2)}H${key.slice(2)} : `,
                    action: TO_DOS_OBJ[key].slice(0, -9)
                }))
        })
    })

    app.get('/upload', (req, res) => {
        res.render('upload', { title: 'Upload file' })
    })

    app.post('/upload', upload.single('file'), (req, res) => {
        scanFiles();

        res.json({ success: true })
    })
}