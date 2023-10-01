

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


  const Videogame = sequelize.define('Videogame', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING, // Cambiar el tipo de dato a STRING
      allowNull: false,
    },
    

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),  
      allowNull: true,
    },

    image: {
        type: DataTypes.STRING,
        validate:{
            isUrl: true,
        },
        defaultValue: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/26TZ62LNNNHFLM5YYVOXEHM7HQ.jpg',
      },

        released: {
        type: DataTypes.DATEONLY,
        validate: {
            isDate: true,
        },
        defaultValue: DataTypes.NOW,
       },

        rating: {
        type: DataTypes.FLOAT,
        
       },
  },
  {
    timestamps: false,
  }
  ); 
  return Videogame;
};

