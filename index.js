const express = require('express')
const cron = require('./sevices/cron')
const http = require('http');
const routesRegister = require('./sevices/routes');
const path = require('path');

const port = 3000
const app = express()
const server = http.createServer(app);

// views:
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

// init services:
cron();

// register root:
routesRegister(app);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})