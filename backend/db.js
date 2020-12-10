const db = require('mysql')
const pool = db.createPool({
    connectionLimit:    10,
    host:               'localhost',
    user:               'root',
    password:           'asf1234',
    database:           'wws'
})

function getConnection(callback) {
    return pool.getConnection(callback)
}

module.exports.getConnection = getConnection