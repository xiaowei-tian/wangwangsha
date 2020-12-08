function parseAll(identities, totalPlayer) {
    var result = '<h2>旺旺杀发牌小程序</h2>'
    for (var i = 0; i < totalPlayer; i++) {
        result = result.concat('<p>')
        result = result.concat(i + 1)
        result = result.concat('号玩家：')
        result = result.concat(translate(identities[i][0]))
        result = result.concat(' ')
        result = result.concat(translate(identities[i][1]))
        result = result.concat('</p>')
    }
    return result
}

function parsePlayer(identity) {
    var result = '<h2>你的身份</h2>'
    result += '<p>'
    result += translate(identity[0])
    result += ', '
    result += translate(identity[1])
    result += '</p>'
    return result
}

function translate(id) {
    if (id == 0) return '复刻'
    if (id == 1) return '平民'
    if (id == 2) return '狼王'
    if (id == 3) return '小狼'
    if (id == 4) return '预言家'
    if (id == 5) return '女巫'
    if (id == 6) return '猎人'
    if (id == 7) return '白痴'
    if (id == 8) return '长老'
    if (id == 9) return '守卫'
}

module.exports.parseAll = parseAll;
module.exports.parsePlayer = parsePlayer;