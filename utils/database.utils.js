const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '715131',
    port: 5432,
    database: 'Exercise_1',
});

module.exports = { db, DataTypes };
