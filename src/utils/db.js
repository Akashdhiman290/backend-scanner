const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    'vigie_test',
    'upwork',
    '5SwBzuzyq99iA2e',
     {
       host: 'terrain.cdx1x2gzjgqp.eu-west-3.rds.amazonaws.com',
       dialect: 'mysql'
     }
   );

module.exports = sequelize