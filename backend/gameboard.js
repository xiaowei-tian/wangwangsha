const gameboard_dict = {
    8: [0,1,1,1,1,1,1,1,2,3,3,4,5,6,7,8],
    9: [0,1,1,1,1,1,1,1,1,2,3,3,4,5,6,7,8,9]
}

function boardValidator(players, board){
    return board.length == players*2;
}

function useBoard(players){
    if(!(players in gameboard_dict)){
        throw new Error(`we dont have a game board for ${players} players!`)
    }
    if(!boardValidator(players, gameboard_dict[players])){
        throw new Error(`invalid setting for a number of players: ${players} !`)
    }
    return gameboard_dict[players]
}

module.exports.useBoard = useBoard