'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class submission_pathogen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  submission_pathogen.init({
    submissionId: DataTypes.INTEGER,
    pathogenId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'submission_pathogen',
  });
  return submission_pathogen;
};