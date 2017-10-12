var tape = require("tape")
var _ = require("../")

tape("Run tests for plugin", function(test) {
    var expected = ["#328a60", 65];
    var actual = _.plugin().function(42, 23);
    test.deepEqual(actual, expected);
    test.end();
});