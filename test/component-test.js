var tape = require("tape")
var plugin = require("../")

tape("component().function(a, b) adds up two numbers", function(test) {
    var expected = 65;
    var actual = plugin.component().function(42, 23);
    test.deepEqual(actual, expected);
    test.end();
});