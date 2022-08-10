process.env.NODE_ENV = 'test';

import assert from 'assert';
import * as permissions from '../src/js_dummy_service.js';

describe('helper matching', function () {
  it('should return a helper something', function () {
    const helperText = permissions.getTextByHelper('blog');
    assert.equal('something', helperText);
  });

  it('should return a helper another outcome', function () {
    const helperText = permissions.getTextByHelper('forum');
    assert.equal('another outcome', helperText);
  });

  it('should return a helper not found', function () {
    const helperText = permissions.getTextByHelper('dummy');
    assert.equal('not found', helperText);
  });
});
