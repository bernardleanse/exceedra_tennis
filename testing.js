const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

prisma.match.findMany({
  where: {
    id: 1
  },
  include: {
    winner: true,
    loser: true
  }
})
.then(match => console.log(match))