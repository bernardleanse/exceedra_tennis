class PlayerListManipulation {
 
  static sortData(data) {
    const assignRankNameData = this.assignRankNames(data)
    const positionedData = this.assignCurrentPosition(assignRankNameData)
    const ranked = this.filterOutUnranked(positionedData)
    const unranked = this.filterOutRanked(positionedData)
    return ranked.concat(unranked)
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

  static getRankName(points){
    if (points < 3000) {
      return "Bronze"
    } else if (points < 5000 ) {
      return "Silver"
    } else if (points < 10000) {
      return "Gold"
    } else {
      return "Supersonic Legend"
    }
  }

  static assignRankNames(data) {
    return data.map(player => {
      const rankName = this.getRankName(player.points)
      if (player.matchesPlayed < 3)
        return player
      else {
        return { ...player, rankName }
      }
    })
  }
}



module.exports = PlayerListManipulation