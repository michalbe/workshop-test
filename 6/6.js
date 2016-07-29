'use strict';
/* global describe, it, $ */
var assert = require('assert');


// LOGIC
var getData = function(cb) {
 $.ajax('/api/url', function(data) {
   data = JSON.parse(data);
   cb(data);
 });
};


// TESTS:
describe('Our App', function() {
  describe('incrementAsyncNumber module', function() {
    it('should increment', function() {
      getData;
      assert;
    });
  });
});
