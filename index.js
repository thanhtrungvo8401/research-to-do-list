const express = require('express')
const cron = require('./sevices/cron')
const http = require('http');
const routesRegister = require('./sevices/routes');
const path = require('path');
const socket = require('./sevices/socket');
const bodyParser = require('body-parser');
const scanFiles = require('./sevices/scan-files');

const port = 3000
const app = express()
const server = http.createServer(app);

// views:
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init services:
const io = socket(server);
cron(io);
scanFiles()

// register root:
routesRegister(app);

server.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on port ${port}`)
})