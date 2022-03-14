const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Match {
  static create(data){
    return prisma.match.create({
      data: {
        winnerId: data.winner.id,
        loserId: data.loser.id
      },
      include: {
        winner: true,
        loser: true
      }
    })
  }
}

module.exports = Match