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
      photoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ticks",
          key: "id",
        },
      },
      specimenId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ticks",
          key: "id",
        },
      },
      dateSubmitted: {type: Sequelize.DATE},
      userMuni: {type: Sequelize.STRING},
      userZip: {type: Sequelize.DOUBLE},
      dateTickFound: {type: Sequelize.DATE},
      foundOn: {type: Sequelize.STRING},
      foundOnOther: {type: Sequelize.STRING},
      tickAttached: {type: Sequelize.STRING},
      animal: {type: Sequelize.STRING},
      dateRemoved: {type: Sequelize.DATE},
      tickLocation: {type: Sequelize.GEOMETRY},
      locationDesc: {type: Sequelize.STRING},
      locationDescOther: {type: Sequelize.STRING},
      tickMuni: {type: Sequelize.STRING},
      tickCounty: {type: Sequelize.STRING},
      tickZip: {type: Sequelize.INTEGER},
      activities: {type: Sequelize.TEXT},
      personBitten: {type: Sequelize.STRING},
      submitterBitten: {type: Sequelize.STRING},
      bittenMuni: {type: Sequelize.STRING},
      bittenZip: {type: Sequelize.DOUBLE},
      bittenTraveledDom: {type: Sequelize.STRING},
      bittenTraveledIntl: {type: Sequelize.STRING},
      travelInfo: {type: Sequelize.TEXT},
      photoFrontUrl: {type: Sequelize.STRING},
      photoBackUrl: {type: Sequelize.STRING},
      photoOtherUrl: {type: Sequelize.STRING},
      additionalInfo: {type: Sequelize.STRING},
      photosReviewed: {type: Sequelize.DATE},
      specimenRequested: {type: Sequelize.DATE},
      specimenReceived: {type: Sequelize.DATE},
      specimenIdentified: {type: Sequelize.DATE},
      notATick: {type: Sequelize.BOOLEAN},
      duplicate: {type: Sequelize.INTEGER},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('submission');
  }
};