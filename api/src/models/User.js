const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
   sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
            // si queremos agregar mas validaciones como un numero se pone is: [/d+/, 'must be a number']
            //debe ir una REGULAR EXPRESSION!
        }
   }, { timestamps: false });
};
