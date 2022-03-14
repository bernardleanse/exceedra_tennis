const express = require('express')
const port = 3001
const app = express()
const Player = require('./models/player')
const PlayerListManipulation = require('./classes/PlayerListManipulation')
const Match = require('./models/match')
const MatchSubmission = require('./classes/MatchSubmission')


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from tennis API')
})

app.listen(port, () => {
  console.log(`Tennis API running on ${port}`)
})

app.post('/players', (req, res) => {
  Player.validate(req.body)
  .then(isValid => {
    if(!isValid){
      res.status(400).json({ error: "Invalid" })
    } else {
      Player.create(req.body)
      .then(data => {
        res.status(201).json({
          status: "Success",
          data: data
        })
      })
    }
  })
})

app.get('/players', (req, res) => {

  const paramsWereGiven = Object.keys(req.query).length >= 1

  if (paramsWereGiven) {
    Player.findBy(req.query)
    .then(data => PlayerListManipulation.sortData(data))
    .then(data => res.send(data))
    
  } else {
    Player.all()
    .then(data => PlayerListManipulation.sortData(data))
    .then(data => res.send(data))  
  }
})

app.post('/matches', async (req, res) => {
  const winnerData = MatchSubmission.convertStringName(req.body.matchWinner)
  const winner = await Player.findBy(winnerData)
  const loserData = MatchSubmission.convertStringName(req.body.matchLoser)
  const loser = await Player.findBy(loserData)
  
  try {
    Match.create({ winner: winner[0], loser: loser[0] })
    .then(match => MatchSubmission.handleMatchSubmission(match))
    .then(result => res.send("success"))
  } catch (err) {
    res.status(400).json({ error: err })
  }
})





