'use strict';
var assert = require('assert');

// LOGIC
var getNewUserInstance = function() {
  return {
    firstName: 'Pol',
    secondName: 'Pot',
    role: 'Father of the Nation'
  };
};


// TESTS:
console.log('Running tests');
try {
  assert.equal(getNewUserInstance(), getNewUserInstance(), 'should be equal');
  console.log('OK!');
} catch(e) {
  console.log('Tests failed', e.message);
}
