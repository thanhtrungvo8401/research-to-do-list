module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index', { title: 'Danh sách việc làm' })
    })

    app.get('/upload', (req, res) => {
        res.render('upload', { title: 'Upload file' })
    })

    app.post('/upload', (req, res) => {
        console.log('UPLOAD FILE', req)

        res.json({ success: true })
    })
}