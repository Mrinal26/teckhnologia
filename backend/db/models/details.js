const Sequelize = require('sequelize');
const sequelize = require('../index');

const Details = sequelize.define('details', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  resumePath: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Details.sync()
  .then(() => {
    console.log('Details table created successfully.');
  })
  .catch(err => console.error('Error creating Details table:', err));

module.exports = Details;
