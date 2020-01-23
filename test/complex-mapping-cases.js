const testInput = {
  guyFirstName: 'FirstGuy',
  guyLastName: 'AwesomeName',
  personAge: '27',
  personAddressStreet: 'GreatPlace',
  personAddressNumber: '14',
};

const basicExpected = {
  guy: {
    first: {
      name: 'FirstGuy',
    },
    last: {
      name: 'AwesomeName',
    },
  },
  person: {
    age: '27',
    address: {
      street: 'GreatPlace',
      number: '14',
    },
  },
};

const customExpected = {
  guy: {
    name: {
      first: 'FirstGuy',
      last: 'AwesomeName',
    },
  },
  person: {
    age: '27',
    address: {
      street: 'GreatPlace',
      number: '14',
    },
  },
};

const fieldMappings = {
  guyFirstName: 'guy.name.first',
  guyLastName: 'guy.name.last',
  personAge: 'person.age',
  personAddressStreet: 'person.address.street',
  personAddressNumber: 'person.address.number',
};

const testCases = [
  [
    'creates a structured representation of given object by breaking camel-case keys on each capital letter',
    [testInput],
    basicExpected,
  ],
  [
    'creates a structured representation of given object by using given field mappings',
    [testInput, fieldMappings],
    customExpected,
  ],
];

module.exports = testCases;
