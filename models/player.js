const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class Player {

  constructor() {}

  static async create(requestData) {

    return prisma.player.create({
      data: {
        firstName: requestData.firstName,
        lastName: requestData.lastName,
        nationality: requestData.lastName,
        dateOfBirth: new Date(requestData.dateOfBirth),
      }
    }) 

  }

  static findManyPlayersMatchingRequestFullName(requestData) {

    return prisma.player.findMany({
      where: {
        firstName: {
          equals: requestData.firstName
        },
        lastName: {
          equals: requestData.lastName
        }
      }
    })

  }
}

module.exports = Player