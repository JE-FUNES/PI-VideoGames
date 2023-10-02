const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define(
    'videogame_platform', {}, {
        timestamps: false,
    
    }
    );
};