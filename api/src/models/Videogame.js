

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


  const Videogame = sequelize.define('Videogame', {

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
        validate: {
            isNumeric: true,
        },
        defaultValue: 0,
       },

  },
  {
    timestamps: false,
  }
  ); 
  return Videogame;
};

