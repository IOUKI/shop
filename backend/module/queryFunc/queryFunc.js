// mysql connections
const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise()

const queryFunc = {
    // select 
    async selectStuff(sqlQuery) {
        const [rows] = await pool.query(sqlQuery)
        return rows 
    },

    // insert, update, delete
    async doSqlStuff(sqlQuery) {
        await pool.query(sqlQuery)
    },
}

module.exports = queryFunc