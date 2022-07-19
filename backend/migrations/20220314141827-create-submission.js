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
      blitzLoc:{ type: Sequelize.STRING,},
      blitzZip:{ type: Sequelize.STRING,},
      sampler:{ type: Sequelize.STRING,},
      timeStart:{ type: Sequelize.STRING,},
      timeEnd:{ type: Sequelize.STRING,},
      timeBlock:{ type: Sequelize.STRING,},
      distance:{ type: Sequelize.STRING,},
      weather:{ type: Sequelize.STRING,},
      weatherOther:{ type: Sequelize.STRING,},
      blitzPhotos:{ type: Sequelize.STRING,},
      blitzAddInfo:{ type: Sequelize.STRING,},
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
        
        type: Sequelize.DATE,
        
      }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('submission');
  }
};