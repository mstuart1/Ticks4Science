'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('identifies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      submissionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "submission",
          key: "id",
        },
      },
      photosReviewed: {
        type: Sequelize.DATE
      },
      photoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ticks",
          key: "id",
        },
      },
    
      specimenRequested: {
        type: Sequelize.DATE
      },
      specimenReceived: {
        type: Sequelize.DATE
      },
      specimenIdentified: {
        type: Sequelize.DATE
      },
      specimenId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ticks",
          key: "id",
        },
      },
      notATick: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
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
    await queryInterface.dropTable('identifies');
  }
};