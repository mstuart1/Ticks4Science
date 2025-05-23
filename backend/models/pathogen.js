'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pathogen extends Model {

    static associate(models) {
      pathogen.belongsToMany(models.submission, { through: 'submission_pathogen' })
      pathogen.belongsToMany(models.ticks, { through: 'tick_pathogen' })
    }
  }
  pathogen.init({
    pathogen: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'pathogen',
  });
  return pathogen;
};