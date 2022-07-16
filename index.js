const express = require('express')
const cron = require('./sevices/cron')
const http = require('http');
const routesRegister = require('./sevices/routes');

const port = 3000
const app = express()
const server = http.createServer(app);

// init services:
cron();

// register root:
routesRegister(app);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})