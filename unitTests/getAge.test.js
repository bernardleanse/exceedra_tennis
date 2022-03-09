const Player = require('../models/player')

describe(Player, () => {
  describe(".calculateAge", () => {
    test("baby born this year is 0", () => {
      expect(Player.calculateAge("2022-1-22")).toBe(0)
    })
    test("baby born before today last year is 1", () => {
      expect(Player.calculateAge("2021-1-22")).toBe(1)
    })
    test("gets my age right", () => {
      expect(Player.calculateAge("1996-8-15")).toBe(25)
    })
  })
})