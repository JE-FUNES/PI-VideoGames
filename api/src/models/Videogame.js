const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Videogame = sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
      },

      released: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
        },
        defaultValue: DataTypes.NOW,
      },

      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true, // Asegura que sea un número entero
          min: 0,      // Valor mínimo
          max: 5,      // Valor máximo
        },
        defaultValue: 0, // Valor predeterminado
      },

      created: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return Videogame;
};
