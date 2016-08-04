exports.reverse = function(req, res) {
  var sentence = req.body.message;
  var reversedChars = sentence.split('').reverse();
  var reversedWords = reversedChars.join("").split(" ");
  var reversedSentence = reversedWords.reverse().join(" ");
  res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.header('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept');
  res.send(reversedSentence);
};