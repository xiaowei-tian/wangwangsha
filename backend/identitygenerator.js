const validation = require('./validation.js')
const gameBoard = require('./gameboard.js')

// This will generate a valid identity combination
 function generateIdentity(totalPlayer, customizedBoard, standardGame) {
    while (true) {
        var identities = standardGame == 1 ? standardGame == 1 : customizedBoard
        var identitiesCopy = [...identities]
        var totalPlayerCopy = totalPlayer
        var result = allocateIdentity(identitiesCopy, totalPlayerCopy)
        if (validation.validate(result)) return result
    }
}

// This will only allocate an identity combination
// No guarantee that this will be a valid combination
function allocateIdentity(identities, totalPlayer) {
    var finalAlloc = []
    for (var i = 0; i < totalPlayer; i++) {
        shuffleArray(identities)
        var currentAlloc = []
        currentAlloc.push(identities[totalPlayer * 2 - 2 * i - 1])
        currentAlloc.push(identities[totalPlayer * 2 - 2 * i - 2])
        identities.pop()
        identities.pop()
        finalAlloc.push(currentAlloc)
    }
    return finalAlloc
}

function shuffleArray(array) {
    array.sort((a,b) => 0.5 - Math.random())
}

module.exports.generateIdentity = generateIdentity