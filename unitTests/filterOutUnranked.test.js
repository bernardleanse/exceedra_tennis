const { filterOutUnranked } = require('../server.js')

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

describe(filterOutUnranked, () => {
  test('only shows ranked', () => {
    expect(filterOutUnranked(dummyData)).toEqual(filteredData)
  })
})
