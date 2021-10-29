const db = require('./db.js')
const gameIdLength = 4

function createNewGamev2(identities, totalPlayer, callback) {
    console.log(totalPlayer);
    var room_code = generateGameId()
    var query = 'insert into game (room_code, player_id, identity1, identity2) values ?'
    var values = [];
    for (var i = 0; i < totalPlayer; i++) {
        values.push([room_code, i + 1, identities[i][0], identities[i][1]]);
    }
    console.log(values);
    db.getConnection(function(err, connection) {
        if (err) {
            throw err; // not connected!  
        }     
        connection.query(query, [values], function (error, results) {
          // When done with the connection, release it.
          connection.release()
          // Handle error after the release.
          if (error) {
            return callback(error)
          }
          callback(null, room_code);
        });
      });
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

module.exports.createNewGamev2 = createNewGamev2