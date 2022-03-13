class PlayerListManipulation {
  static sortData(data) {
    const rankedData = this.filterOutUnranked(data)
    const orderedRanked = this.assignCurrentPosition(rankedData)
    const unRankedData = this.filterOutRanked(data)
    const unOrderedRanked = this.assignCurrentPosition(unRankedData)
    return orderedRanked.concat(unOrderedRanked)
  }
  
  static assignCurrentPosition(data){
    let currentPosition = 1
    
    return data.map(obj => {
      let modified = { ...obj, currentPosition: currentPosition}
      currentPosition += 1
      return modified
    })
  }
  
  static filterOutUnranked(data){
    const ranked = data.filter((obj) => !(obj.rankName == null))
    return ranked
  }
  
  static filterOutRanked(data){
    const ranked = data.filter((obj) => obj.rankName == null)
    return ranked
  }
}

module.exports = PlayerListManipulation