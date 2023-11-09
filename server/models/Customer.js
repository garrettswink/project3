const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

// create a fintrack user model

class Customer extends Model {}

//create fields/columns for user model

Customer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'customer'
    }
  );
  
  module.exports = Customer;
  