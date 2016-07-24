'use strict';
var assert = require('assert');

// LOGIC
var add = function(a, b) {
  return a+b;
};


// TESTS:
console.log('Running tests');
try {
  assert(/* TEST CASE HERE, */ 'should be equal');
  console.log('OK!');
} catch(e) {
  console.log('Tests failed', e.message);
}
