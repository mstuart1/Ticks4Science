'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ticks.init({
    common: DataTypes.STRING,
    scientific: DataTypes.STRING,
    humanHosts: DataTypes.BOOLEAN,
    intro: DataTypes.TEXT,
    hosts: DataTypes.TEXT, 
    habitat: DataTypes.TEXT, 
    njLocations: DataTypes.TEXT, 
    activeMonths: DataTypes.TEXT,
    buttonImgUrl: DataTypes.STRING,
    featureImgUrl: DataTypes.STRING, 
    mapImgUrl: DataTypes.STRING, 
    refImgArray: DataTypes.JSON, 
  }, {
    sequelize,
    modelName: 'ticks',
  });
  return ticks;
};