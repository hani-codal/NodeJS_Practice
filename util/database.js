const mysql = require('mysql2');

const pool = mysql.createPool({
    user:'root',
    password:'Shiv#1707',
    database:'node learn',
    host:'localhost'
})

module.exports = pool.promise()
