const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//   expense: enteredExpense,
//   category: enteredCategory - Bills, Groceries, Subscription, Travel, Leisure, Car Expense
//   amount: +enteredAmount,
//   date: new Date(enteredDate),

//create customer expense

class Expense extends Model {}

// create fields/columns for Expense model
Expense.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      bills: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      groceries: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subscription: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      travel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      leisure: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      car_expense: {
        type: DataTypes.INTEGER,
        defaultValue: true
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'expense'
    }
  );
  
  module.exports = Expense;