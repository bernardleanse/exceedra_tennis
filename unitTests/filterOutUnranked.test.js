const PlayerListManipulation = require('../classes/PlayerListManipulation.js')

const dummyData = [
  {
    data: 'some data',
    rankName: 'Bronze'
  },
  {
    data: 'some more data'
  }
]

const filteredData = [
  {
    data: 'some data',
    rankName: 'Bronze'
  }
]

describe(PlayerListManipulation, () => {
  test('only shows ranked', () => {
    expect(PlayerListManipulation.filterOutUnranked(dummyData)).toEqual(filteredData)
  })
})
