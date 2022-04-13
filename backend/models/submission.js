'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class submission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    submission.init({
        dateSubmitted: DataTypes.DATE,
        tickId: DataTypes.STRING,
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
        activities: DataTypes.STRING(1000),
        personBitten: DataTypes.STRING,
        submitterBitten: DataTypes.STRING,
        bittenMuni: DataTypes.STRING,
        bittenZip: DataTypes.DOUBLE,
        bittenTraveledDom: DataTypes.STRING,
        bittenTraveledIntl: DataTypes.STRING,
        travelInfo: DataTypes.STRING(1000),
        photoFrontUrl: DataTypes.STRING,
        photoBackUrl: DataTypes.STRING,
        photoOtherUrl: DataTypes.STRING,
        additionalInfo: DataTypes.STRING,
        photosReviewed: DataTypes.DATE,
        specimenRequested: DataTypes.DATE,
        specimenReceived: DataTypes.DATE,
        specimenIdentified: DataTypes.DATE,
        species: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'submission',
    });
    return submission;
};