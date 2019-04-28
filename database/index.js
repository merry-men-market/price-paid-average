require('../server/server.js');
const Sequelize = require('sequelize');

const user = 'Julius';

const sequelize = new Sequelize('stocks', 'postgres', user, {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Postgres connection successful');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
