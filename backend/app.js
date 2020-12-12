/* 身份对照表
0: 复刻
1：平民
2：狼王
3：普通狼
4：预言家
5：女巫
6：猎人
7：白痴
8：禁言长老
9: 守卫
*/
var cors = require('cors')
const express = require('express')
const game = require('./game.js')
const identityGenerator = require('./identitygenerator.js')
const identityLoader = require('./identityloader.js')
const parser = require('./parser.js')
const db = require('./db.js')
const sqlCommands = require('./sqlCommds.js')
const app = express()
const port = 3000
const defaultTotalPlayer = 8

app.use(cors())
app.use(express.urlencoded());
app.use(express.json());

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
  var standardGame = req.query.standard
  var cutomizeBoard = req.query.gameBoard
  var players = req.query.totalPlayer ? req.query.totalPlayer : defaultTotalPlayer
  var identities = identityGenerator.generateIdentity(players, cutomizeBoard, standardGame)
  var result = parser.parseAll(identities, players)
  game.createNewGame(identities, defaultTotalPlayer, function(err, gameId) {
    result += '<p>房间号：'
    result += gameId
    result += '</p>'
    res.send(result)
  })
})

app.post('/saveGameBoards', (req, res) => {
  var name = req.body.boardName
  var totalPlayer = req.body.totalPlayer
  var gameBoard = req.body.gameBoard
  var cmd = sqlCommands.sql_insert_gameboard(name, totalPlayer, gameBoard)
  db.queryDB(cmd, function(err, result){
    if(err) {
      console.log(err)
      res.status(500).json(err)
    }
    res.status(200).json(result)
  })
})

app.get('/getGameBoards', (req, res) => {
  var cmd = sqlCommands.sql_getAll_gameboard()
  db.queryDB(cmd, function(err, result){
    if(err) {
      console.log(err)
      res.status(500).json(err)
    }
    res.status(200).json(result)
  })
})

app.listen(port, () => {  
  console.log(`Example app listening at http://localhost:${port}`)
})
