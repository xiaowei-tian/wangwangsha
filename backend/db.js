const db = require('mysql')
const pool = db.createPool({
    connectionLimit:    10,
    host:               'localhost',
    user:               'Please replace with your local db username',
    password:           'Please replace with your local db password',
    database:           'wws'
})

function getConnection(callback) {
    return pool.getConnection(callback)
}

module.exports.getConnection = getConnection