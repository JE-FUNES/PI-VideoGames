const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define(
    'videogame_genre', {
      VideogameId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      GenreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    }, {
        timestamps: false,
    
    }
    );
};