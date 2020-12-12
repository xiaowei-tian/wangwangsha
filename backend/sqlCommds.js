function sql_insert_gameboard(name, totalPlayers, gameBoard){
    return `INSERT INTO game_boards (board_name, total_player, identities) VALUES (${JSON.stringify(name)}, ${totalPlayers}, ${JSON.stringify(gameBoard)});`
}

function sql_getAll_gameboard(){
    return `SELECT * FROM game_boards;`
}

module.exports.sql_insert_gameboard = sql_insert_gameboard
module.exports.sql_getAll_gameboard = sql_getAll_gameboard