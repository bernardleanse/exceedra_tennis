const PlayerListManipulation = require("../classes/PlayerListManipulation")


const getRankName = PlayerListManipulation.getRankName

describe(getRankName, () => {
  test("it gives bronze below 3000", () => {
    expect(getRankName(2000)).toBe("Bronze")
  })
  test("it gives silver between 3000 and 5000", () => {
    expect(getRankName(4999)).toBe("Silver")
  })
  test("it gives gold between 5000 and 10000", () => {
    expect(getRankName(9999)).toBe("Gold")
  })
  test("it gives supersonic legend between 10000 and up", () => {
    expect(getRankName(10001)).toBe("Supersonic Legend")
  })
})