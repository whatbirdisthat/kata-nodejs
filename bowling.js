module.exports = {
  Game: function() {
    return {
      theScore: 0,
      score: function() {
        return this.theScore
      },
      bowl: function(pins) {
        this.theScore += pins
      }
    }
  }
}


