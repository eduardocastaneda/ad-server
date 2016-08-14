var functions = require('../lib/functions');

var reverse = function (req, res) {
  var reversedMessage = functions.reverseMessage(req.body.message);
  res.send(reversedMessage);
};

module.exports = reverse;
