function sql_insert_gameboard(name, totalPlayers, gameBoard){
    return `INSERT INTO game_boards (board_name, total_player, identities) VALUES (${JSON.stringify(name)}, ${totalPlayers}, ${JSON.stringify(gameBoard)});`
}

module.exports.sql_insert_gameboard = sql_insert_gameboard