const db = require('mysql')
const pool = db.createPool({
    connectionLimit:    10,
    host:               'localhost',
    user:               'root',
    password:           'root',
    database:           'wws'
})

function getConnection(callback) {
    return pool.getConnection(callback)
}

module.exports.getConnection = getConnection