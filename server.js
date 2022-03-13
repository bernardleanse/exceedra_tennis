const express = require('express')
const port = 3001
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const app = express()
const Player = require('./models/player')
const { query } = require('express')
const { process_params } = require('express/lib/router')

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
    .then(data => assignRank(data))
    .then(data => res.send(data))
    
  } else {
    Player.all()
    .then(data => assignRank(data))
    .then(data => res.send(data))  
  }

})

const assignRank = (data) => {
  let rank = 1
  return data.map(data => {
    let modified = { ...data, rank: rank }
    rank += 1
    return modified
  })
 
}

module.exports = assignRank

