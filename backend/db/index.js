const Sequelize = require('sequelize');
const sequelize = new Sequelize('database_name', 'root', 'Mrinal@2000', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,  
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
