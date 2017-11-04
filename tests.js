let assert = require("./assert.js")
let testRunner = require("./test-runner.js")

let bowling = require("./bowling.js")

let theTests = {

  CanReportZeroGameAsZeroScore: function(game) {
    assert.Equal(0, game.score())
  },

  CanReportGutterGameAsZeroScore: function(game) {
    for (var i = 0; i < 20; i++) {
      game.bowl(0)
    }
    assert.Equal(0, game.score())
  },

  CanReportOnePinGameAsScoreOfOne: function(game) {
    game.bowl(1)
    assert.Equal(1, game.score())
  },

  CanReportGameOfOnesAsScoreOfNineteen: function(game) {
    for (var i = 0; i < 20; i++) {
      game.bowl(1)
    }
    assert.Equal(20, game.score())
  },

  CanReportASpare: function(game) {
    game.bowl(6)
    game.bowl(4)
    game.bowl(3)
    for (var i = 0; i < 17; i++) {
      game.bowl(0)
    }
    assert.Equal(16, game.score())
  },

  CanReportTwoSparesInAFullGame: function(game) {

    let bowls = [3,5,4,6,2,7,5,3,1,1,6,1,0,4,0,0,3,6,5,0]

    for ( var b in bowls ) {
      game.bowl(bowls[b])
    }


    assert.Equal(64, game.score())
  }

}

testRunner.RunTests(theTests, function() { return new bowling.Game() })
