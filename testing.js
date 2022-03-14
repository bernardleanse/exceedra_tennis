const { PrismaClient } = require("@prisma/client");
const Player = require("./models/player");

const prisma = new PrismaClient()

// prisma.match.findMany({
//   where: {
//     winner: {
//       firstName: "Bernard",
//       lastName: "Leanse"
//     }
//   },
//   include: {
//     winner: true,
//     loser: true
//   }
// })
// .then(res => console.log(res))


Player.findBy({id: 2})
.then(result => console.log(result))
