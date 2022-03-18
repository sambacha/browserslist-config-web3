/**
 * @file configuration test
 * @version 0.1.3
 */

'use strict';

const browserslist = require('browserslist');

beforeEach(() => {
  jest.resetModules();
});

// test that production and development are both there
it('should not export an array', () => {
  const config = require('./index');
  expect(Array.isArray(config)).toBe(false);
});

it('should not contain invalid queries', () => {
  jest.doMock('browserslist-config-web3', () => require('../index'), {
    virtual: true,
  });

  const result = browserslist(['extends browserslist-config-web3']);
  expect(result).toBeTruthy();
});
/** @exports browserslists testing harness */
