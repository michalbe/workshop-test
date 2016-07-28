'use strict';
/* global describe, it */
var assert = require('assert');

// LOGIC
var incrementLast = (function() {
  var value = 0;
  return function(inc) {
    value = value + inc;
    return value;
  };
})();


// TESTS:
describe('Our App', function() {
  describe('incrementAsyncNumber module', function() {
    it('should increment', function() {
      incrementLast;
      assert;
    });
  });
});
