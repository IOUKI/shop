require('dotenv').config()
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
}).promise()

connection.connect((err) => {
    if (err) {
        console.log('連線成功' + err.stack)
        return 
    }
    console.log('連線成功，連線ID為' + connection.threadId)
})