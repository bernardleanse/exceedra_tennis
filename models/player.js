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

  static validate(requestData) {
    return this.playersMatchingRequestName(requestData)
    .then(array => {
      if(array.length >= 1) {
        return true
      } else {
        return false
      }
    })
  }

  static playersMatchingRequestName(requestData) {

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