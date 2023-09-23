const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define(
    'videogame_genre', {}, {
        timestamps: false
    
    }
    );
};