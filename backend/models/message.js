'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    
    static associate(models) {
      message.belongsTo(models.submission);
    }
  }
  message.init({
    role: DataTypes.STRING,
    message: DataTypes.TEXT,
    answered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};