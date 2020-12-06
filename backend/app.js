/* 身份对照表
1：平民
2：狼王
3：普通狼
4：预言家
5：女巫
6：猎人
7：白痴
8：禁言长老
9：小女孩
*/
var cors = require('cors')
const express = require('express')
const game = require('./game.js')
const identityGenerator = require('./identitygenerator.js')
const identityLoader = require('./identityloader.js')
const parser = require('./parser.js')
const app = express()
const port = 3000
const defaultIdentityList = [1,1,1,1,1,1,1,1,2,3,3,4,5,6,7,8]
const defaultTotalPlayer = 8

app.use(cors())

app.get('/', (req, res) => {
  res.send('<h2>旺旺杀自助发牌小程序</h2>')
})

app.get('/getIdentity', (req,res) => {
  identityLoader.loadIdentityByGameId(req.query.gameId, req.query.playerId, function(err, result){
    console.log(result)
    if (err) {
      res.send(err)
    } else {
      res.send(parser.parsePlayer(result))
    }
  })
})

app.get('/createGame', (req, res) => {
  console.log(req.query.totalPlayer)
  var identities = identityGenerator.generateIdentity(defaultIdentityList, defaultTotalPlayer)
  var result = parser.parseAll(identities, defaultTotalPlayer)
  game.createNewGame(identities, defaultTotalPlayer, function(err, gameId) {
    result += '<p>房间号：'
    result += gameId
    result += '</p>'
    res.send(result)
  })
})

app.listen(port, () => {  
  console.log(`Example app listening at http://localhost:${port}`)
})
