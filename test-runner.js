module.exports = {

  RunTests: function(theTests, setupFunc) {
    for (t in theTests) {
      let Reset = "\x1b[0m"
      let FgGreen = "\x1b[32m"
      let FgRed = "\x1b[31m"

      let thisResult = FgGreen + "\u2713 " + Reset + t
      try {
        let ObjectUnderTest = setupFunc()
        theTests[t](ObjectUnderTest)
      } catch (e) {
        thisResult = FgRed + "\u2717 " + Reset + t + ' (' + e + ')'
      }
      console.log(thisResult)
    }

  }

}
