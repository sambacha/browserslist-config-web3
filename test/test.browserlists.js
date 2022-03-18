/**
 * @file test browserslists
 * @usage `npx jest -u`
 */

'use strict';

const browserslist = require('browserslist');

beforeEach(() => {
  jest.resetModules();
});

it('should export an array', () => {
  const config = require('../index');
  expect(Array.isArray(config)).toBe(true);
});

it('should not contain invalid queries', () => {
  jest.doMock('web3-browserslist-config', () => require('../index'), {
    virtual: true,
  });

  const result = browserslist(['extends web3-browserslist-config']);
  expect(result).toBeTruthy();
});
/** @exports broweserslist validation */
