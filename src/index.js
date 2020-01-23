const { inspect } = require('util');
const { join } = require('path');
const { parseCsv, csvToJs } = require('./parse-csv');
const { mapToComplex } = require('./complex-mapping');

const filepath = join(__dirname, '..', 'data', 'data.csv');
const csvData = parseCsv(filepath);
const jsData = csvToJs(csvData);

const fieldMappings = {
  guyFirstName: 'guy.name.first',
  guyLastName: 'guy.name.last',
  personAge: 'person.age',
  personAddressStreet: 'person.address.street',
  personAddressNumber: 'person.address.number',
};

const complexData = jsData.map(row => mapToComplex(row));
const complexDataWithMappings = jsData.map(row => mapToComplex(row, fieldMappings));

console.log(inspect(complexData[0]));
console.log(inspect(complexDataWithMappings[0]));
