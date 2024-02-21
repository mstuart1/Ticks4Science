'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class citizen extends Model {
    static associate(models) {
      citizen.hasMany(models.submission)
    }
  }
  citizen.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    reset: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'citizen',
  });
  return citizen;
};