const db = require('./db.js')

function loadIdentityByRoomCodeAndPlayerId(roomCode, playerId, callback) {
  var querySeparator = '\'';
  var query = 'select identity1, identity2 from game where room_code = ' + querySeparator + roomCode + querySeparator
  query += ' and player_id = ' + querySeparator + playerId + querySeparator + ';'
  db.getConnection(function(err, connection) {
      if (err) throw err; // not connected!       
      connection.query(query, function (error, results, fields) {
        // When done with the connection, release it.
        connection.release()
        // Handle error after the release.
        if (error) return callback(error)
        if (results.length == 0) return callback('Invalid GameID or PlayerID, please refresh and try again')
        callback(null, [results[0].identity1, results[0].identity2])
      });
    });
}

module.exports.loadIdentityByRoomCodeAndPlayerId = loadIdentityByRoomCodeAndPlayerId