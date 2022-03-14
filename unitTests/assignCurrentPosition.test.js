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

const positionedData = [
  {
    currentPosition: 1,
    data: 'some data',
    rankName: 'Bronze'
  },
  {
    currentPosition: 2,
    data: 'some more data'
  }
]

describe(PlayerListManipulation, () => {
  test('it gives a list of objects a rank ascending', () => {
    expect(PlayerListManipulation.assignCurrentPosition(dummyData)).toEqual(positionedData)
  })
 
})
