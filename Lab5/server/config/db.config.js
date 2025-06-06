const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 1434,
        dialect: 'mssql',
        dialectOptions: {
            encrypt: true,
            trustServerCertificate: true,
        },
    }
);

const db = {};
db.Sequlize = Sequelize;
db.sequelize = sequelize;

module.exports = db;