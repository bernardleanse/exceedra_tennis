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
  res.send("Players here:")
})