const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_db', 'my_user', 'my_password', {
    host: 'localhost',
    port: "3307",
    dialect: 'mysql',
});

module.exports = sequelize;
