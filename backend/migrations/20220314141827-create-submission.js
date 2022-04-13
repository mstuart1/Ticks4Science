'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('submission', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tickId: { type: Sequelize.STRING },
      dateSubmitted: {type:  Sequelize.DATE},
      userMuni: {type:  Sequelize.STRING},
      userZip: {type:  Sequelize.DOUBLE},
      dateTickFound: {type:  Sequelize.DATE},
      foundOn: {type:  Sequelize.STRING},
      foundOnOther: {type:  Sequelize.STRING},
      tickAttached: {type:  Sequelize.STRING},
      animal: {type:  Sequelize.STRING},
      dateRemoved: {type:  Sequelize.DATE},
      tickLocation: {type:  Sequelize.GEOMETRY},
      locationDesc: {type:  Sequelize.STRING},
      locationDescOther: {type:  Sequelize.STRING},
      tickMuni: {type:  Sequelize.STRING},
      tickCounty: {type:  Sequelize.STRING},
      tickZip: {type:  Sequelize.INTEGER},
      activities: {type:  Sequelize.STRING(1000)},
      personBitten: {type:  Sequelize.STRING},
      submitterBitten: {type:  Sequelize.STRING},
      bittenMuni: {type:  Sequelize.STRING},
      bittenZip: {type:  Sequelize.DOUBLE},
      bittenTraveledDom: {type:  Sequelize.STRING},
      bittenTraveledIntl: {type:  Sequelize.STRING},
      travelInfo: {type:  Sequelize.STRING(1000)},
      photoFrontUrl: {type:  Sequelize.STRING},
      photoBackUrl: {type:  Sequelize.STRING},
      photoOtherUrl: {type:  Sequelize.STRING},
        additionalInfo: {type:  Sequelize.STRING},
        photosReviewed: {type: Sequelize.DATE},
        specimenRequested: {type: Sequelize.DATE},
        specimenReceived: {type: Sequelize.DATE},
        specimenIdentified: {type: Sequelize.DATE},
        species: {type:  Sequelize.STRING},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('submission');
  }
};