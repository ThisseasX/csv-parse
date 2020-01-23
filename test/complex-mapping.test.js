const { mapToComplex } = require('../src/complex-mapping');
const testCases = require('./complex-mapping-cases');
const { deepEqual } = require('assert');

describe('mapToComplex', () => {
  testCases.forEach(([title, input, expected]) => {
    it(title, () => {
      deepEqual(mapToComplex(...input), expected);
    });
  });
});
