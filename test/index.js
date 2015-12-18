var nativeExtension = require('../');
var assert = require('assert');

describe('native function test', function() {
    it('should return true', function () {
        var t = nativeExtension.kunoTest();
        assert.equal(typeof t, 'boolean');
        assert.equal(t, true);
    });
});

describe('native extension', function() {
  it('should export a wrapped object', function() {
    var obj = new nativeExtension.MyObject(0);
    assert.equal(obj.plusOne(), 1);
    assert.equal(obj.plusOne(), 2);
    assert.equal(obj.plusOne(), 3);
  });

  it('should export function that returns nothing', function() {
    assert.equal(nativeExtension.nothing(), undefined);
  });

  it('should export a function that returns a string', function() {
    assert.equal(typeof nativeExtension.aString(), 'string');
  });

  it('should export a function that returns a boolean', function() {
    assert.equal(typeof nativeExtension.aBoolean(), 'boolean');
  });

  it('should export function that returns a number', function() {
    assert.equal(typeof nativeExtension.aNumber(), 'number');
  });

  it('should export function that returns an object', function() {
    assert.equal(typeof nativeExtension.anObject(), 'object');
  });

  it('should export function that returns an object with a key, value pair', function() {
    assert.deepEqual(nativeExtension.anObject(), {'key': 'value'});
  });

  it('should export function that returns an array', function() {
    assert.equal(Array.isArray(nativeExtension.anArray()), true);
  });

  it('should export function that returns an array with some values', function() {
    assert.deepEqual(nativeExtension.anArray(), [1, 2, 3]);
  });

  it('should export function that calls a callback', function(done) {
    nativeExtension.callback(done);
  });

});
