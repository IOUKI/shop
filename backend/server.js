require('dotenv').config()
const http = require('http')
const app = require('./app.js')

const port = process.env.LISTEN_PORT || 3000

const server = http.createServer(app)

server.listen(port)