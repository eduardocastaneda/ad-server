exports.reverse = function(req, res) {
  var sentence = req.params.sentence;
  var reversedChars = sentence.split('').reverse();
  var reversedWords = reversedChars.join("").split(" ");
  var reversedSentence = reversedWords.reverse().join(" ");

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send({result : reversedSentence});
};

exports.toUpper = function(req, res) {
  var sentence = req.params.sentence;
  var toUpperSentence = sentence.toUpperCase();

  res.send({result : toUpperSentence});
}