const { readFileSync } = require('fs');

const parseCsv = filepath => {
  const file = readFileSync(filepath, 'utf8');

  const rows = file.split('\r\n').filter(row => row);
  const table = rows.map(row => row.split(';'));

  return table;
};

const csvToJs = csvData => {
  const columnNames = csvData[0];
  const rows = csvData.slice(1);

  const entities = rows.map(row => {
    return row.reduce((acc, cur, i) => ({ ...acc, [columnNames[i]]: cur }), {});
  });

  return entities;
};

module.exports = { parseCsv, csvToJs };
