'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tick_pathogen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tick_pathogen.init({
    tickId: DataTypes.INTEGER,
    pathogenId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tick_pathogen',
  });
  return tick_pathogen;
};