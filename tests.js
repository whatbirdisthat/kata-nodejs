let assert = require("./assert.js")
let bowling = require("./bowling.js")

let theTests = {

  CanReportZeroGameAsZeroScore: function() {
    let game = new bowling.Game()
    assert.Equal(1, game.score())
  }

}

for (t in theTests) {
  let thisResult = "\u2713 " + t
  try {
  theTests[t]()
  } catch (e) {
    thisResult = "\u2717 " + t + ' (' + e + ')'
  }
  console.log(thisResult)
}
