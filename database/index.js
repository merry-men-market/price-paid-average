
require('../server/server.js');
const Sequelize = require('sequelize');

const user = 'root';
const pass = '';


// Option 1: Passing parameters separately
const sequelize = new Sequelize('test', user, pass, {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
