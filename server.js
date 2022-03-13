const express = require('express')
const port = 3001
const app = express()
const Player = require('./models/player')
const PlayerListManipulation = require('./classes/PlayerListManipulation')
const Match = require('./models/match')

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

app.post('/matches', (req, res) => {
  console.log(req.body)
  res.send("ok")
})




