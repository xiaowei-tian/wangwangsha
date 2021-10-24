const db = require('./db.js')
const gameIdLength = 4

// TODO: deprecate once v2(god mode) is ready
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

function createNewGamev2(identities, totalPlayer, callback) {
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
module.exports.createNewGamev2 = createNewGamev2