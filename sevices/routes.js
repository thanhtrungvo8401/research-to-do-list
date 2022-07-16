module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index', { title: 'Danh sách việc làm' })
    })
}