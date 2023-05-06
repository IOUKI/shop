const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// cors config
// allow method: get, post, patch, delete
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    })
)

// morgan
app.use(morgan('dev'))

// express json parser
app.use(express.json())

// routes
app.get('/api', (req, res, next) => {
    res.send('shop API Server')
})
app.use('/api/adminUser', require('./routes/adminUser.js'))

// route error handle
app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
    })
})

module.exports = app 