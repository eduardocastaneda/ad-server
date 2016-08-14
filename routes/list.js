var functions = require('../lib/functions');

var list = function (req, res) {
  var mostReversedList = functions.getMostReversed();
  res.send(mostReversedList);
};

module.exports = list;
