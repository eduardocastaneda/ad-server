var functions = {
  reverseMessage: function (message) {
    var reversedChars = message.split('').reverse();
    var reversedWords = reversedChars.join('').split(' ');
    var reversedMessage = reversedWords.reverse().join(' ');

    return reversedMessage.toLowerCase();
  },
  getMostReversed: function () {
    return [
      {
        'message': 'Skriv en bok som alla läser',
        'url': '/reverse/skriv-en-bok-som-alla-läser'
      },
      {
        'message': 'Sy upp en kollektion med kläder',
        'url': '/reverse/sy-upp-en-kollektion-med-kläder'
      },
      {
        'message': 'Säg ett ord som blir bevingat',
        'url': '/reverse/säg-ett-ord-som-blir-bevingat'
      },
      {
        'message': 'Sätt en flagga på en topp',
        'url': '/reverse/sätt-en-flagga-på-en-topp'
      },
      {
        'message': 'Korsa apor med kaniner',
        'url': '/reverse/korsa-apor-med-kaniner'
      },
      {
        'message': 'Få ett pris ur kungens hand',
        'url': '/reverse/få-ett-pris-ur-kungens-hand'
      },
      {
        'message': 'Vi kommer alltid att leva',
        'url': '/reverse/vi-kommer-alltid-att-leva'
      },
      {
        'message': 'Vi kommer aldrig att dö',
        'url': '/reverse/vi-kommer-aldrig-att-dö'
      }
    ];
  }
}

module.exports = functions;
