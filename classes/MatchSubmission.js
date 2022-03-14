const Player = require("../models/player")

class MatchSubmission {

  static convertStringName(name) {
    const firstName = name.split(" ")[0]
    const lastName = name.split(" ")[1]
    return { firstName, lastName }
  } 

  static handleMatchSubmission(match) {
    const loserPointsLost = this.handleMatchLoss(match.loser) 
    this.handleMatchWin({ winner: match.winner, loserPointsLost })
  }

  static handleMatchLoss(loser) {
    const pointsLost = Math.floor(loser.points / 10)
    const points = loser.points - pointsLost
    Player.update({ ...loser, points: points, matchesPlayed: loser.matchesPlayed + 1})
    .then(player => player)
    return pointsLost
  }

  static handleMatchWin(data) {
    const newPointsForWinner = data.winner.points + data.loserPointsLost
    Player.update({ ...data.winner, points: newPointsForWinner, matchesPlayed: data.winner.matchesPlayed + 1 })
    .then(player => player)
  }

}

module.exports = MatchSubmission