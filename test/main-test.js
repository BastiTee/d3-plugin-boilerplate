var tape = require("tape")
var _ = require("../")

tape("Run tests for plugin", function(test) {
    var expected = "#328a60"
    var actual = _.plugin().color();
    test.deepEqual(actual, expected);
    test.end();
});