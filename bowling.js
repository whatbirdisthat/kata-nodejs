function isSpare(bowlIndex, bowls) {
  return bowlIndex > 0 && bowls[bowlIndex] + bowls[bowlIndex-1] == 10
}
function isStrike(bowlIndex, bowls) {
  return bowls[bowlIndex] == 10 && bowlIndex < 9
}


module.exports = {
  Game: function() {
    return {
      bowls:Array.apply(null, Array(21)).map(Number.prototype.valueOf,0),
      bowlCounter: 0,
      score: function() {
        var theScore = 0

        for (var b = 0; b < this.bowls.length; b++) {

          if (isStrike(b, this.bowls)) {
            let strikeBonus = this.bowls[b] + this.bowls[b+1] + this.bowls[b+2]
            theScore += strikeBonus
          } else if (isSpare(b, this.bowls)) {
            spareBonus = this.bowls[b] + this.bowls[b+1]
            theScore += spareBonus
          } else {
            theScore += this.bowls[b]
          }


        }

        return theScore
      },
      bowl: function(pins) {
        this.bowls[this.bowlCounter] = parseInt(pins)
        this.bowlCounter++
      }
    }
  }
}


