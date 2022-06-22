const { db, DataTypes } = require('../utils/database.utils');

//Creating resgistrations model (table)
const Registration = db.define('resgistration', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },

    entraceTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },

    exitTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = { Registration };
