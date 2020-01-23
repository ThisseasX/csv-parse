const { parseCsv, csvToJs } = require('../src/parse-csv');
const { parseCsvCases, csvToJsCases } = require('./parse-csv-cases');
const { deepEqual } = require('assert');

describe('parseCsv', () => {
  parseCsvCases.forEach(([title, input, expected]) => {
    it(title, () => {
      deepEqual(parseCsv(input), expected);
    });
  });
});

describe('csvToJs', () => {
  csvToJsCases.forEach(([title, input, expected]) => {
    it(title, () => {
      deepEqual(csvToJs(input), expected);
    });
  });
});
