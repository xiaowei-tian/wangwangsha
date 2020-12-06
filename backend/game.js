const db = require('./db.js')
const gameIdLength = 4

function createNewGame(identities, totalPlayer, callback) {
    var gameId = generateGameId()
    var identitiesStr = convertIdentities(identities)
    var query = 'insert into game_states (id, total_player, identities) values ?'
    var values = [
        [gameId, totalPlayer, identitiesStr]
    ]
    db.getConnection(function(err, connection) {
        if (err) throw err; // not connected!       
        connection.query(query, [values], function (error, results) {
          // When done with the connection, release it.
          connection.release()
          // Handle error after the release.
          if (error) return callback(error)

          callback(null, gameId);
        });
      });
}

function convertIdentities(identities) {
    var result = ''
    for (var i = 0; i < identities.length; i++) {
        result += identities[i]
        result += ','
    }
    return result
}

function generateGameId() {
    var _sym = 'abcdefghijklmnopqrstuvwxyz'
    var str = ''

    for(var i = 0; i < gameIdLength; i++) {
        var next = Math.random() * (_sym.length)
        str += _sym.substring(next, next+1);
    }
    return str
}

module.exports.createNewGame = createNewGame