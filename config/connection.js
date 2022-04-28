// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, { //new Sequelize accepts the database name, MySQL username and pw as parameters
    host: 'localhost', // we also need to pass configuration settings
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;