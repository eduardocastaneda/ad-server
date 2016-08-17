var assert = require('chai').assert;
var functions = require('../lib/functions');

describe('reverse function', function () {
  it('Should reverse words in message', function () {
    var message = 'Idag åt jag en macka till frukost'
    var reversedMessage = functions.reverseMessage(message);

    assert.equal(reversedMessage, 'gadI tå gaj ne akcam llit tsokurf');
  });
});

describe('get most reversed list', function () {
  it('Should get eight of the most reversed messages', function () {
    var messages = functions.getMostReversed();

    assert.strictEqual(messages.length, 8);
  });
});
