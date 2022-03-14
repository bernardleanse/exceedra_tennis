const PlayerListManipulation = require("../classes/PlayerListManipulation");
const dummyData = [
  {
    firstName: "Bernard",
    points: 1600,
    matchesPlayed: 1
  },
  {
    firstName: "Os",
    points: 1900,
    matchesPlayed: 4
  }
]

const newData = [
  {
    firstName: "Bernard",
    points: 1600,
    matchesPlayed: 1
  },
  {
    firstName: "Os",
    points: 1900,
    matchesPlayed: 4,
    rankName: "Bronze"
  }
]


describe(PlayerListManipulation, () => {
  describe(PlayerListManipulation.assignRankNames, () => {
    test('it gives correct rank to players who have played less than 3 games', () => {
      expect(PlayerListManipulation.assignRankNames(dummyData)).toEqual(newData)
    })
  })
})