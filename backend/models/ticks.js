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
    scientific: DataTypes.STRING,
    common: DataTypes.STRING,
    intro: DataTypes.TEXT,
    colors: DataTypes.STRING,
    shape: DataTypes.STRING, 
    hosts: DataTypes.STRING, 
    habitat: DataTypes.STRING, 
    njLocations: DataTypes.TEXT, 
    larvaeActive: DataTypes.STRING, 
    larvaeFeed: DataTypes.STRING, 
    nymphActive: DataTypes.STRING, 
    nymphFeed: DataTypes.STRING, 
    adultActive: DataTypes.STRING, 
    adultFeed: DataTypes.STRING, 
    featureImgUrl: DataTypes.STRING, 
  }, {
    sequelize,
    modelName: 'ticks',
  });
  return ticks;
};