'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.message, {foreignKey: 'adminId'})
    }
  }
  users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    manageUsers: DataTypes.BOOLEAN,
    resetToken: DataTypes.STRING,
    emailAlerts: DataTypes.BOOLEAN,
    editData: DataTypes.BOOLEAN,
    editPathogens: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};