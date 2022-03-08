const express = require('express')
const port = 3001
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const app = express()
const Player = require('./models/player')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from tennis API')
})

app.listen(port, () => {
  console.log(`Tennis API running on ${port}`)
})

app.post('/players', (req, res) => {

  Player.findManyPlayersMatchingRequestFullName(req.body)
  .then(fields => {
    if(fields.length >= 1){
      res.status(400).json({ error: "Player already in Database" })
    } else {
      Player.create(req.body)
      .then(data => {
        res.status(201).json({
          status: "success",
          data: data
        })
      })
    }
  })
  
  

})
