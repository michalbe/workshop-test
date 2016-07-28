'use strict';
/* global describe, it */
var assert = require('assert');

// LOGIC
var incrementAsyncNumber = function(number, cb) {
  setTimeout(function() {
    number++;
    cb(number);
  }, 1000);
};


// TESTS:
describe('Our App', function() {
  describe('incrementAsyncNumber module', function() {
    it('should return number', function() {
      var number = 10;
      incrementAsyncNumber(number, function(newNumber) {
        assert.equal(newNumber, number + 1, 'is Equal!');
      });
    });
  });
});
