const sequelize = require('sequelize');

const database = new sequelize('EstiloMB', 'admin', 'admin', {
    dialect: 'mssql', host: 'localhost', port: 49674
});

database.sync();
module.exports = database;