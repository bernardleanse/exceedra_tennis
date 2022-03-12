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

  static async validate(requestData) {
    const nameIsValid = await this.validName(requestData) 
    const age = this.calculateAge(requestData.dateOfBirth)
    const ageIsValid = this.validAge(age)
    return nameIsValid && ageIsValid
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

  static validAge(age) {
    return age >= 16 
  }

  static calculateAge(dob){
    const dateToday = new Date
    const dateOfBirth = new Date(dob) 
    const differenceInMs = dateToday - dateOfBirth 
    return parseInt(differenceInMs / (1000 * 60 * 60 * 24 * 365))
  }
}

module.exports = Player