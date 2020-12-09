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

function useCustumBoard(characterList) {
    var custumizeList = []
    for (var i = 0; i < characterList.peopleNum; i++){
        custumizeList.push(1)
    }
    for (var i = 0; i < characterList.werewolfNum; i++){
        custumizeList.push(3)
    }
    for (var i = 0; i < characterList.wolfkingNum; i++){
        custumizeList.push(2)
    }
    for (var i = 0; i < characterList.seerNum; i++){
        custumizeList.push(4)
    }
    for (var i = 0; i < characterList.witchNum; i++){
        custumizeList.push(5)
    }
    for (var i = 0; i < characterList.hunterNum; i++){
        custumizeList.push(6)
    }
    for (var i = 0; i < characterList.idiotNum; i++){
        custumizeList.push(7)
    }
    for (var i = 0; i < characterList.silenceNum; i++){
        custumizeList.push(8)
    }
    for (var i = 0; i < characterList.guardNum; i++){
        custumizeList.push(9)
    }
    for (var i = 0; i < characterList.cloneNum; i++){
        custumizeList.push(0)
    }
    return custumizeList
}

module.exports.useBoard = useBoard
module.exports.useCustumBoard = useCustumBoard