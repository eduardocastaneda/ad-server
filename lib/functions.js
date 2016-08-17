var functions = {
  reverseMessage: function (message) {
    var reversedChars = message.split('').reverse();
    var reversedWords = reversedChars.join('').split(' ');
    var reversedMessage = reversedWords.reverse().join(' ');

    return reversedMessage;
  },
  getMostReversed: function () {
    return [
      {
        'message': 'Skriv en bok som alla läser',
        'url': '/reverse/Skriv-en-bok-som-alla-läser'
      },
      {
        'message': 'Sy upp en kollektion med kläder',
        'url': '/reverse/Sy-upp-en-kollektion-med-kläder'
      },
      {
        'message': 'Säg ett ord som blir bevingat',
        'url': '/reverse/Säg-ett-ord-som-blir-bevingat'
      },
      {
        'message': 'Sätt en flagga på en topp',
        'url': '/reverse/Sätt-en-flagga-på-en-topp'
      },
      {
        'message': 'Korsa apor med kaniner',
        'url': '/reverse/Korsa-apor-med-kaniner'
      },
      {
        'message': 'Få ett pris ur kungens hand',
        'url': '/reverse/Få-ett-pris-ur-kungens-hand'
      },
      {
        'message': 'Vi kommer alltid att leva',
        'url': '/reverse/Vi-kommer-alltid-att-leva'
      },
      {
        'message': 'Vi kommer aldrig att dö',
        'url': '/reverse/Vi-kommer-aldrig-att-dö'
      }
    ];
  }
}

module.exports = functions;
