const db = require('mysql')
const pool = db.createPool({
    connectionLimit:    10,
    host:               'localhost',
    user:               'root',
    password:           'asdf1234',
    database:           'wws'
})

function getConnection(callback) {
    return pool.getConnection(callback)
}

function queryDB(sqlCommand, cb){
    pool.getConnection(function(err, conn){
        if (err){
            console.log(`we lost db connection, or we cannot connect to db`)
            throw new Error(`DB error`)
        }
        else{
            conn.query(sqlCommand, function(err, res){
                conn.release();
                cb(err, res);
            })
        }
    })
}

module.exports.getConnection = getConnection
module.exports.queryDB = queryDB