let assert = require("./assert.js")
let testRunner = require("./test-runner.js")

let bowling = require("./bowling.js")

let theTests = {

  CanReportZeroGameAsZeroScore: function(game) {
    assert.Equal(0, game.score())
  },

  CanReportGutterGameAsZeroScore: function(game) {
    game.bowl(0)
    assert.Equal(0, game.score())
  },

  CanReportOnePinGameAsScoreOfOne: function(game) {
    game.bowl(1)
    assert.Equal(1, game.score())
  },

  CanReportGameOfOnesAsScoreOfNineteen: function(game) {
    for (var i = 0; i < 19; i++) {
      game.bowl(1)
    }
    assert.Equal(19, game.score())
  }

}

testRunner.RunTests(theTests, function() { return new bowling.Game() })
