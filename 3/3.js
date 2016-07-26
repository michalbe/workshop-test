'use strict';
var assert = require('assert');

// LOGIC
var incrementBy = function(number, by) {
  if (typeof number === 'number' && typeof by === 'number') {
    return number + by;
  } else {
    throw new Error('Gimme numbers, bitch');
  }
};


// TESTS:
console.log('Running tests');
try {
  assert(incrementBy);

  console.log('OK!');
} catch(e) {
  console.log('Tests failed', e.message);
}
