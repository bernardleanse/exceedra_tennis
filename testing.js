const Player = require('./models/player')

const data = {
  firstName : "Babdgfhhhhfgdfhhhjdfgjy",
  lastName : "Leanse",
  nationality : "British",
  dateOfBirth : "08/15/1996"
}

Player.validate(data)
// .then(res => console.log(res)) 

// Player.validName(data)
// .then(res => console.log(res))



// console.log(Player.calculateAge("08/15/1996"))