const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

// ID: UUID
// name, description, plataform, image, released, rating

  sequelize.define('Videogame', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    parent_plataforms: {
      type: DataTypes.ARRAY(DataTypes.ENUM('PlayStation', 'Xbox', 'Nintendo', 'Android', 'PC')),  
      allowNull: false,
    },

    image: {
        type: DataTypes.STRING,
        validate:{
            isUrl: true,
        },
        defaultValue: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/26TZ62LNNNHFLM5YYVOXEHM7HQ.jpg',
      },

        releaseDate: {
        type: DataTypes.DATEONLY,
        validate: {
            isDate: true,
        },
        allowNull: false,
    },

    rating: {
        type: DataTypes.FLOAT,
        validate: {
          max: 5,
          min: 0,
        },
        allowNull: false,
    },

    created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
  );
};
