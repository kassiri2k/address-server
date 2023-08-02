const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "Tiger_z",
    password: "plan123",
    database: "plan_s"

})

module.exports = db