'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class submission extends Model {
        static associate(models) {
            submission.belongsTo(models.ticks, {
                as: "photoId",
              });
            submission.belongsTo(models.ticks, {
                as: "specimenId",
              });
        }
    }
    submission.init({
        dateSubmitted: DataTypes.DATE,
        userMuni: DataTypes.STRING,
        userZip: DataTypes.DOUBLE,
        dateTickFound: DataTypes.DATE,
        foundOn: DataTypes.STRING,
        foundOnOther: DataTypes.STRING,
        tickAttached: DataTypes.STRING,
        animal: DataTypes.STRING,
        dateRemoved: DataTypes.DATE,
        tickLocation: DataTypes.GEOMETRY,
        locationDesc: DataTypes.STRING,
        locationDescOther: DataTypes.STRING,
        tickMuni: DataTypes.STRING,
        tickCounty: DataTypes.STRING,
        tickZip: DataTypes.INTEGER,
        activities: DataTypes.TEXT,
        personBitten: DataTypes.STRING,
        submitterBitten: DataTypes.STRING,
        bittenMuni: DataTypes.STRING,
        bittenZip: DataTypes.DOUBLE,
        bittenTraveledDom: DataTypes.STRING,
        bittenTraveledIntl: DataTypes.STRING,
        travelInfo: DataTypes.TEXT,
        photoFrontUrl: DataTypes.STRING,
        photoBackUrl: DataTypes.STRING,
        photoOtherUrl: DataTypes.STRING,
        additionalInfo: DataTypes.STRING,
        photosReviewed: DataTypes.DATE,
        specimenRequested: DataTypes.DATE,
        specimenReceived: DataTypes.DATE,
        specimenIdentified: DataTypes.DATE,
        notATick: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'submission',
    });
    return submission;
};