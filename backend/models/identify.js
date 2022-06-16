'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class identify extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      identify.belongsTo(models.ticks, {
        as: "photo",
      });
    identify.belongsTo(models.ticks, {
        as: "specimen",
      });
      identify.belongsTo(models.submission);
      identify.belongsTo(models.user);
    }
  }
  identify.init({
    photosReviewed: DataTypes.DATE,
    specimenRequested: DataTypes.DATE,
    specimenReceived: DataTypes.DATE,
    specimenIdentified: DataTypes.DATE,
    notATick: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'identify',
  });
  return identify;
};