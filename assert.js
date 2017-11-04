module.exports = {
  Equal: function(expected, actual) {
    if (expected !== actual) {
      let failmsg = "Expected '" + expected + "', Actual '" + actual + "'"
      throw failmsg
    }
  }
}
