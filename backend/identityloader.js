const db = require('./db.js')

function loadIdentityByGameId(gameId, playerId, callback) {
    var query = 'select * from game_states where id = \'' + gameId + '\';'
    db.getConnection(function(err, connection) {
        if (err) throw err; // not connected!       
        connection.query(query, function (error, results, fields) {
          // When done with the connection, release it.
          connection.release()
          // Handle error after the release.
          if (error) return callback(error)
          if (results.length == 0) return callback('Invalid GameID or PlayerID, please refresh and try again')
          var identity = parseIdentityForPlayer(playerId, results[0].identities)
          callback(null, identity)
        });
      });
}

function parseIdentityForPlayer(playerId, identities) {
    var result = []
    var index = (playerId - 1) * 4
    result.push(identities.substring(index, index+1))
    result.push(identities.substring(index+2, index+3))
    return result
}

module.exports.loadIdentityByGameId = loadIdentityByGameId