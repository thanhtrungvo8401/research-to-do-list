const upload = require("./multer")

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index', { title: 'Danh sách việc làm' })
    })

    app.get('/upload', (req, res) => {
        res.render('upload', { title: 'Upload file' })
    })

    app.post('/upload', upload.single('file'), (req, res) => {
        res.json({ success: true })
    })
}