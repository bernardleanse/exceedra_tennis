const assignRank = require('../server.js')

const dummyData = [
  {
    data: 'some data'
  },
  {
    data: 'some more data'
  }
]

const rankedData = [
  {
    rank: 1,
    data: 'some data'
  },
  {
    rank: 2,
    data: 'some more data'
  }
]

describe(assignRank, () => {
  test('it gives a list of objects a rank ascending', () => {
    expect(assignRank(dummyData)).toBe(rankedData)
  })
})