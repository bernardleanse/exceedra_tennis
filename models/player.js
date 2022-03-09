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
        age: this.calculateAge(requestData.dateOfBirth)
      }
    }) 

  }

  static validate(requestData) {
    return this.validName(requestData)
  }

  static validName(requestData) {

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
    .then(results => {
      if(results.length >= 1) {
        return false
      } else {
        return true
      }
    })
  }
  static calculateAge(dob){
    const dateToday = new Date
    const dateOfBirth = new Date(dob)
    const differenceInMs = dateToday - dateOfBirth 
    return parseInt(differenceInMs / (1000 * 60 * 60 * 24 * 365))
  }
}

module.exports = Player