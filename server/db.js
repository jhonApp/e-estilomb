const sequelize = require('sequelize');

const database = new sequelize('EstiloMB', 'userAdmin', 'admin', {
    dialect: 'mssql', host: 'localhost', port: 49689
});

database.sync();
module.exports = database;