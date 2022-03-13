const { assignCurrentPosition } = require('../server.js')

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

describe(assignCurrentPosition, () => {
  test('it gives a list of objects a rank ascending', () => {
    expect(assignCurrentPosition(dummyData)).toEqual(positionedData)
  })
 
})
