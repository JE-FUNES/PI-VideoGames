const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Contact",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },

      likedPage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      reason: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

    },
    {
      timestamps: false,
    }
  );
};
