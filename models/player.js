const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class Player {

  constructor() {}

  static create(requestData) {

    return prisma.player.create({
      data: {
        firstName: requestData.firstName,
        lastName: requestData.lastName,
        nationality: requestData.lastName,
        dateOfBirth: new Date(requestData.dateOfBirth)
      }
    }) 

  }
}

module.exports = Player