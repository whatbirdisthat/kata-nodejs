let assert = require("./assert.js")
let testRunner = require("./test-runner.js")

let bowling = require("./bowling.js")

let theTests = {

  CanReportZeroGameAsZeroScore: function() {
    let game = new bowling.Game()
    assert.Equal(0, game.score())
  },

  CanReportGutterGameAsZeroScore: function() {
    let game = new bowling.Game()
    game.bowl(0)
    assert.Equal(0, game.score())
  }

}

testRunner.RunTests(theTests)
