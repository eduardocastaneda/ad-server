exports.reverse = function(req, res) {
  var sentence = req.params.sentence;
  var reversedChars = sentence.split('').reverse();
  var reversedWords = reversedChars.join("").split(" ");
  var reversedSentence = reversedWords.reverse().join(" ");

  res.send({result : reversedSentence});
};

exports.toUpper = function(req, res) {
  var sentence = req.params.sentence;
  var toUpperSentence = sentence.toUpperCase();

  res.send({result : toUpperSentence});
}