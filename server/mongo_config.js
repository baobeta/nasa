const username = 'baodeptrai'
const password = '123456';
const host = 'localhost';
const port = '27017';
const dbName = 'nasa';
const dbNameTest = 'nasa-test';

const mongoUrl =  `mongodb://${username}:${password}@${host}:${port}/${dbName}`;
const mongoUrlTest =  `mongodb://${username}:${password}@${host}:${port}/${dbNameTest}`;

module.exports = {
  mongoUrl,
  mongoUrlTest,
};