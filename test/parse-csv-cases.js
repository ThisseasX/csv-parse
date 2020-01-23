const { join } = require('path');
const filepath = join(__dirname, '..', 'data', 'data.csv');

const parsedCsv = [
  [
    'guyFirstName',
    'guyLastName',
    'personAge',
    'personAddressStreet',
    'personAddressNumber',
  ],
  ['FirstGuy', 'AwesomeName', '27', 'GreatPlace', '14'],
  ['SecondGuy', 'CoolName', '28', 'Someplace', '15'],
  ['ThirdGuy', 'GreatName', '29', 'Otherplace', '16'],
];

const parsedJs = [
  {
    guyFirstName: 'FirstGuy',
    guyLastName: 'AwesomeName',
    personAge: '27',
    personAddressStreet: 'GreatPlace',
    personAddressNumber: '14',
  },
  {
    guyFirstName: 'SecondGuy',
    guyLastName: 'CoolName',
    personAge: '28',
    personAddressStreet: 'Someplace',
    personAddressNumber: '15',
  },
  {
    guyFirstName: 'ThirdGuy',
    guyLastName: 'GreatName',
    personAge: '29',
    personAddressStreet: 'Otherplace',
    personAddressNumber: '16',
  },
];

const parseCsvCases = [['parses a csv file into a 2d array', filepath, parsedCsv]];
const csvToJsCases = [['converts a 2d array into a js object', parsedCsv, parsedJs]];

module.exports = {
  parseCsvCases,
  csvToJsCases,
};
